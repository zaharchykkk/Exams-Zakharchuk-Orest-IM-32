'use strict';
// Get one random element from an array

const randomElement = (arr) => {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

module.exports = randomElement;
