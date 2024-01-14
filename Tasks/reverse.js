'use strict';
// Reverse dict, exchange keys and values

const reverse = (obj) => {
  const res = {};
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    res[value] = key;
  }
  return res;
};

module.exports = reverse;
