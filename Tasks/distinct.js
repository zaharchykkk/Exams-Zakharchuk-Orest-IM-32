'use strict';
// Return an array without duplicates

const distinct = (arr) => {
  const res = [];
  for (const item of arr) {
    if (!res.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

module.exports = distinct;
