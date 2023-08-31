'use strict';

let canvasElem = document.getElementById('chart')

let statechart = new AppState();
statechart.loadItems();


/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

// function renderChart() {
//   let chartObj = {
//     type: 'bar',
//     data: {
//       labels: statechart.allProducts.name,
//       datasets: [{
//         label: '# of Views',
//         data: oddduckviews, // array that will hold the views
//         borderWidth: 5,
//         backgroundColor: 'red',
//         borderColor: 'red'
//       },
//       {
//         label: '# of Votes',
//         data: oddduckvotes, // array that will hold the # of votes
//         borderWidth: 5,
//         backgroundColor: 'blue',
//         borderColor: 'blue'
//       }
//       ]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//           ticks: {
//             stepSize: 1,
//           }
//         }
//       }
//     }
//   };

//   surverychart = new Chart(ctx, chartObj);
// }



renderChart();
