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

function renderChart() {

  let oddducknames = [];
  let oddduckshows = [];
  let oddduckclicks = [];

  for(let i = 0; i < statechart.allProducts.length; i++){
    oddducknames.push(statechart.allProducts[i].name);
    oddduckshows.push(statechart.allProducts[i].timesShown);
    oddduckclicks.push(statechart.allProducts[i].timesClicked);
  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: oddducknames,
      datasets: [{
        label: '# of Views',
        data: oddduckshows, // array that will hold the views
        borderWidth: 5,
        backgroundColor: 'red',
        borderColor: 'red'
      },
      {
        label: '# of Votes',
        data: oddduckclicks, // array that will hold the # of votes
        borderWidth: 5,
        backgroundColor: 'blue',
        borderColor: 'blue'
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          }
        }
      }
    }
  };

  new Chart(canvasElem, chartObj);
}



renderChart();
