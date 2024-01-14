'use strict';
// Find an intersection of two dictionaries

const intersection = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const result = {};
  for (const key of object1Keys) {
    if (object2[key] === object1[key]) {
      result[key] = object1[key];
    }
  }
  return result;
};

module.exports = intersection;
