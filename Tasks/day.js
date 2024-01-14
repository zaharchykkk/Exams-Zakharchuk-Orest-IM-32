'use strict';
// Get day number
const DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDays = day => {
  for (let i = 0; i < DAY.length; i++) {
    if (day.startsWith(DAY[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDays;
