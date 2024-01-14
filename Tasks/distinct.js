'use strict';
// Return an array without duplicates

const distinct = (arr) => {
  const res = [];
  arr.forEach((item) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
};

module.exports = distinct;
