'use strict';
// Return an array without duplicates

const distinct = (arr) => {
  const newArr = [];
  arr.forEach((item) => {
    if (newArr.includes(item)) {
      delete arr[item];
    } else {
      newArr.push(item);
    }
  });
  return arr;
};

module.exports = distinct;
