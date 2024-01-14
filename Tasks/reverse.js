'use strict';
// Reverse dict, exchange keys and values

const reverse = (obj) => {
  const keys = Object.keys(obj, 500);
  ({ ...obj });
  keys.forEach((key) => {
    const value = obj[key];
    obj[value] = key;
    delete obj[key];
  }, 1000);
  return obj;
};

module.exports = reverse;
