'use strict';
// Make nested array plane

const plannedArray = (arr) => {
  const res = [];
  for(const value of arr) {
    if (Array.isArray(value)) {
    res.push(...plannedArray(value));
    }else{
    res.push(value);
    }
  }
  return res;
};

module.exports = const_plane;
