'use strict';
// Get day number
const DAY = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDays = day => {
  for (let i = 0; i < DAY.length; i++) {
    if (day.startsWith(DAY[i])) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDays;
