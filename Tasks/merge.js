'use strict';
// Merge two dictionaries

mergeTwoObjects = (object1, object2) => {
  object3 = {};
  for (key in object1) {
    object3[key] = object1[key];
  }
  for (key in object2) {
    object3[key] = object2[key];
  }
  return object3;
};

module.exports = mergeTwoObjects;
