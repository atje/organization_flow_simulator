
/* v8 ignore start */
export function createChart(chartID) {
  let c = new Chart(chartID, {
      type: "line",
      data: {
        datasets: [
        {
          label: "Completed",
          borderColor: '#37ad84',
          backgroundColor: '#37ad84'
        },
        {
          label: "In process",
          borderColor: '#6276b8',
          backgroundColor: '#6276b8'
        },
        {
          label: "Queued within a team",
          borderColor: '#a0a7b3',
          backgroundColor: '#a0a7b3'
        },
        {
          label: "Waiting for other teams",
          borderColor: '#fff1ca',
          backgroundColor: '#fff1ca'
        }
      ]
      },
      options:{
        scales: {
          y: {
            beginAtZero: true,
             title: {
              display: true,
              text: "Number of work items",
              font: {
                size: 16,
                weight: "bold"
              }
             }
          },
          x : {
            title: {
              display: true,
              text: "Simulation Days",
              font: {
                size: 16,
                weight: "bold"
              }
            }
          }
        }
        ,
        plugins: {
          legend: {
            position: "chartArea",
            labels: {
              font: {
                size: 14,
                weight: "bold"
              }
            }
          },
          title: {
            display: true,
            text: 'Work items in process and completed over time',
            font: {
              size: 20,
              weight: "bolder"
            }
          }
        }
      }
    });
    return c
}
/* v8 ignore end */

export function renderWorkItemOutputChart(chartID, state) {
  let chart = Chart.getChart(chartID)

  // Check if the chart exists, otherwise create it
  if (chart == undefined) {
    chart = createChart(chartID)
  }

  // Update the chart data with cumulative counts per day
  let currDay = Math.floor(state.simulationTime)
  for (const dataset of chart.data.datasets) {
    dataset.data.length = currDay + 1
  }
  chart.data.datasets[0].data[currDay] = state.workItemRecords.filter((wi) => wi.completed).length
  chart.data.datasets[1].data[currDay] = state.workItemRecords.filter((wi) => !wi.completed).length
  chart.data.datasets[2].data[currDay] = state.workItems.filter((wi) => wi.queued && !wi.transferred && !wi.completed).length
  chart.data.datasets[3].data[currDay] = state.joinBuffers.size
  
  // Update the chart labels as simulation days
  const labels = [];
  for (let i = 0; i <= Math.ceil(state.simulationTime); i++) {labels.push(i.toString())}
  chart.data.labels = labels
 chart.update()
}