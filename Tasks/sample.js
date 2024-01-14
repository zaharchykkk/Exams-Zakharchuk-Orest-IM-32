'use strict';
// Get one random element from an array

const randomElement = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = randomElement;
