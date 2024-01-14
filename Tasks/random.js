'use strict';
// Generate random integer value in given range

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = random;
