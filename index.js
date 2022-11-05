'use strict';

// подключение модулей
const moment = require('moment');


let date = moment().format('dddd, MMMM DD YYYY, h:mm:ss');
document.getElementById('currentDate').innerHTML = `Date: ${date}`;
