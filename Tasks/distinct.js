'use strict';
// Return an array without duplicates

const distinct = (arr) => {
  const arrSet = new Set();
  arr.forEach((item) => {
    if (arrSet.has(item)) {
      delete arr[item];
    } else {
      arrSet.add(item);
    }
  });
  return arr;
};

module.exports = distinct;
