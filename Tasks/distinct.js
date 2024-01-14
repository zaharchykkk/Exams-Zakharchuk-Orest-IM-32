'use strict';
// Return an array without duplicates

const distinct = (arr) => {
  const arrSet = new Set();
  let counter = 0;
  arr.forEach((item) => {
    if (arrSet.has(item)) {
      delete arr[item];
    } else {
      arrSet.add(item);
    }
    counter++;
  });
  return arr.filter
  (x => typeof x === 'number');
};

module.exports = distinct;
