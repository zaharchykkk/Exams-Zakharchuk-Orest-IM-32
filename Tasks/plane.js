'use strict';
// Make nested array plane

const plannedArray = (arr) => {
  const res = [];
  for(let i = 0, length = arr.length; i < length; i++){
    const value = arr[i];
    if (Array.isArray(value)) {
    res.push(...plannedArray(value));
    arr[i] = res[i - 1];
    }else{
    arr[i] = res[i - 1];
    res.push(value);
    }
  }
  return res;
};

module.exports = const_plane;
