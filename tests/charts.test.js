import { afterEach, describe, expect, it, vi } from "vitest";
import { renderWorkItemOutputChart } from "../web/charts.js";

function createMockChart() {
  return {
    data: {
      datasets: [{ data: [] }, { data: [] }, { data: [] }, { data: [] }],
      labels: [],
    },
    update: vi.fn(),
  };
}

function stubChart(existingChart) {
  let createdChart;
  const chartConstructor = vi.fn(function (_chartId, config) {
    createdChart = createMockChart();
    createdChart.config = config;
    return createdChart;
  });
  chartConstructor.getChart = vi.fn().mockReturnValue(existingChart);
  vi.stubGlobal("Chart", chartConstructor);
  return { chartConstructor, getCreatedChart: () => createdChart };
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("renderWorkItemOutputChart", () => {
  it("updates an existing chart and uses the floored day for counts", () => {
    const chart = createMockChart();
    const { chartConstructor } = stubChart(chart);
    const state = {
      workItems: [],
      workItemRecords: [],
      simulationTime: 0.4,
      joinBuffers: new Set()
    };

    renderWorkItemOutputChart("work-items", state);

    expect(chartConstructor.getChart).toHaveBeenCalledWith("work-items");
    expect(chartConstructor).not.toHaveBeenCalled();
    expect(chart.data.labels).toEqual(["0", "1"]);
    expect(chart.update).toHaveBeenCalledOnce();
  });

  it("creates a chart when one does not already exist", () => {
    const { chartConstructor, getCreatedChart } = stubChart(undefined);
    const state = {
      workItems: [],
      workItemRecords: [],
      simulationTime: 0.4,
      joinBuffers: new Set()
    };

    renderWorkItemOutputChart("work-items", state);

    expect(chartConstructor).toHaveBeenCalledOnce();
    expect(chartConstructor).toHaveBeenCalledWith(
      "work-items",
      expect.objectContaining({ type: "line" }),
    );
    expect(getCreatedChart().update).toHaveBeenCalledOnce();
  });

  it("removes chart data beyond the current simulation day", () => {
    const chart = createMockChart();
    chart.data.datasets.forEach((dataset) => {
      dataset.data = [1, 2, 3, 4];
    });
    stubChart(chart);

    renderWorkItemOutputChart("work-items", {
      workItems: [],
      workItemRecords: [],
      simulationTime: 0.4,
      joinBuffers: new Set(),
    });

    expect(chart.data.datasets.map((dataset) => dataset.data)).toEqual([
      [0],
      [0],
      [0],
      [0],
    ]);
  });

  it("counts completed records separately from records still in process", () => {
    const chart = createMockChart();
    stubChart(chart);
    const records = [
      { completed: true },
      { completed: false },
      { completed: true },
    ];
    const state = {
      workItems: [],
      workItemRecords: records,
      simulationTime: 1,
      joinBuffers: new Set()
    };

    renderWorkItemOutputChart("work-items", state);

    expect(chart.data.datasets[0].data[1]).toBe(2);
    expect(chart.data.datasets[1].data[1]).toBe(1);
  });

  it("counts only queued work items that are neither transferred nor completed", () => {
    const chart = createMockChart();
    stubChart(chart);
    const workItems = [
      { queued: true, transferred: false, completed: false },
      { queued: true, transferred: true, completed: false },
      { queued: true, transferred: false, completed: true },
      { queued: false, transferred: false, completed: false },
    ];
    const state = {
      workItems: workItems,
      workItemRecords: [],
      simulationTime: 1,
      joinBuffers: new Set()
    }; 

    renderWorkItemOutputChart("work-items", state);

    expect(chart.data.datasets[2].data[1]).toBe(1);
    expect(chart.data.datasets[3].data[1]).toBe(0);
  });

  it("uses the floored time for counts and labels through the ceiling", () => {
    const chart = createMockChart();
    stubChart(chart);
    const records = [{ completed: true }, { completed: false }];
    const state = {
      workItems: [
        { queued: true, transferred: false, completed: false },
        { queued: true, transferred: true, completed: false },
      ],
      workItemRecords: records,
      simulationTime: 2.7,
      joinBuffers: new Map().set("buffer1", new Set())
    };

    renderWorkItemOutputChart("work-items", state);

    expect(chart.data.datasets[0].data[2]).toBe(1);
    expect(chart.data.datasets[1].data[2]).toBe(1);
    expect(chart.data.datasets[2].data[2]).toBe(1);
    expect(chart.data.datasets[3].data[2]).toBe(1);
    expect(chart.data.labels).toEqual(["0", "1", "2", "3"]);
  });
});
