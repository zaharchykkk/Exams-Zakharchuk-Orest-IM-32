'use strict';
// Make nested array plane

const const_plane = (arr) => {
  const res = [];
  let j = 0;
  for(let i = 0, length = arr.length; i < length; i++){
    const value = arr[i];
    j = i
    if (Array.isArray(value) && [i, length]) {
    res.push(...const_plane(value));
    arr[i] = res[i - 1]
    }else{
    arr[i] = res[j - 1]
    res.push(value);
    };
  };
  return res
};

module.exports = const_plane;
