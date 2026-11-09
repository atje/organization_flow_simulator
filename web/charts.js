
/* v8 ignore start */
export function createChart(chartID) {
  let c = new Chart(chartID, {
      type: "line",
      data: {
        datasets: [
                  {
          label: "In process",
          borderColor: 'rgb(184, 122, 6)'
        },
{
          label: "Completed",
          borderColor: 'rgb(8, 159, 79)'
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


// Transform a list of counts per day into a cumulative list of counts per day
export function makeCumulativeData(list) {
  let cumulativeList = []
  for (let n = 0; n < list.length;n++) {
    if (n === 0) {
      cumulativeList.push(list[n])
    } else {
      cumulativeList.push(list[n] + cumulativeList[n-1])
    }
  }
  return cumulativeList
}

// Reduce function to count completed work items per day
const reduceCompletedCountPerDay = (accDayData, workItemRecord) => {
    const day = Math.ceil(workItemRecord.leadTime + workItemRecord.startTime)
    accDayData[day] += 1

  return accDayData
}

// Reduce function to count incomplete work items per day
const reduceIncompleteCountPerDay = (accDayData, workItemRecord) => {
    const day = Math.floor(workItemRecord.startTime)
    accDayData[day] += 1

  return accDayData
}

export function renderFeatureOutputChart(chartID, workItemRecords, simulationTime) {
  let chart = Chart.getChart(chartID)

  // Check if the chart exists, otherwise create it
  if (chart == undefined) {
    chart = createChart(chartID)
  }

  // Update the chart data with cumulative counts per day
  chart.data.datasets[1].data = makeCumulativeData(
    workItemRecords.filter(wi => wi.completed).reduce(
      reduceCompletedCountPerDay, new Array(Math.ceil(simulationTime)).fill(0)))

  chart.data.datasets[0].data = makeCumulativeData(
    workItemRecords.reduce(
      reduceIncompleteCountPerDay, new Array(Math.ceil(simulationTime)).fill(0))).map((count, index) => {
        // Remove any completed work items that are still in process from the incomplete count so that
        // the incomplete count only reflects work items that are still in process
        return count - chart.data.datasets[1].data[index]
      })
  
  // Update the chart labels as simulation days
  const labels = [];
  for (let i = 0; i <= Math.ceil(simulationTime); i++) {labels.push(i.toString())}
  chart.data.labels = labels
 chart.update()
}