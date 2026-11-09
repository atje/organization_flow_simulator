import { describe, expect, it } from "vitest";
import { groupTimingRecords, makeCumulativeData } from "../web/charts.js";

describe("groupTimingRecords", () => {
  it("groups records by one-decimal lead time and processing ratio", () => {
    const records = [
      { id: 1, completed: true, leadTime: 2.04, processingTime: 1.02 },
      { id: 2, completed: false, startTime: 3, processingTime: 1.04 },
    ];

    expect(groupTimingRecords(records, 5.04)).toEqual([
      {
        leadTime: 2,
        processingRatio: 0.5,
        count: 2,
        completedCount: 1,
      },
    ]);
  });

  it("uses a zero ratio when a work item has no elapsed lead time", () => {
    expect(groupTimingRecords([
      { id: 1, completed: false, startTime: 5, processingTime: 1 },
    ], 5)).toEqual([
      {
        leadTime: 0,
        processingRatio: 0,
        count: 1,
        completedCount: 0,
      },
    ]);
  });
});

describe("makeCumulativeData", () => {
  it("creates cumulative data from array of input", () => {
    const groupedRecords = [
      {input: [0,0,1,0,1,0,0,0,0,0], res: [0,0,1,1,2,2,2,2,2,2]},
      {input: [0,0,1,0,1,0,0,0,5,0], res: [0,0,1,1,2,2,2,2,7,7]},
      {input: [1,2,1,0,1,0,0,0,5,1], res: [1,3,4,4,5,5,5,5,10,11]}
    ];
    
    for (const { input, res } of groupedRecords) {
      expect(makeCumulativeData(input)).toEqual(res);
    }
   });
});
