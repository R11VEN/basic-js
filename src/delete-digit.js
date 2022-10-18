const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');

  let result = [];
  for (let i = 0; i < arr.length; i++) {
      
    for (let j = 0; j < arr.length; j++) {
      if(i === j) {
        continue;
      }
      result.push(arr[j]);
    }
      result.push(',')
  }
    return Math.max.apply(null, result.join('').split(','))
}

module.exports = {
  deleteDigit
};
