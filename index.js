// 'use strict';

// подключение модулей
const moment = require('moment');
const Chart = require('chart.js');

// работа с Moment
let date = moment().format('dddd, MMMM DD YYYY, h:mm:ss');
document.getElementById('main__currentDate').innerHTML = `Date: ${date}`;

// работа с Chart.js

// document.addEventListener('DOMContentLoaded', () => { 
// document.querySelector('.main__chart'),

// {
// type: 'line',
// data: {
//     labels: ['April', 'May', 'June', 'July', 'August'],
//     datasets: [
//         {
//             label: 'Books read',
//             data: [3, 6, 2, 7, 4]
//         }
//     ]
// },
// options: {}

// };
// })

let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
label: "My First dataset",
backgroundColor: 'rgb(255, 99, 132)',
borderColor: 'rgb(255, 99, 132)',
data: [0, 10, 5, 2, 20, 30, 45],

        }]
    },

    options: {}
});
