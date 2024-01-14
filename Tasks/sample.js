'use strict';
// Get one random element from an array

const randomElement = (arr) => {
  const random = Math.floor(Math.random() * arr.length);
  arr = arr[random];
  return arr;
};

module.exports = randomElement;
