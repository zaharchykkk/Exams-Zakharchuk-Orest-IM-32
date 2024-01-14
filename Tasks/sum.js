'use strict';
// Sum all numbers from an array

const sum = (args) => {
  let res = 0;
  const array = args.flat(Infinity);
  for (const value of array){
    if (typeof value === 'number'){
      res += value;
    }
  }
  return res;
}

module.exports = sum;
