const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let list = arr;
  let mapped = list.map(function(el, i) {
    return { index: i, value: el };
    });

    mapped.sort(function(a, b) {
      if(a.value == -1 || b.value == -1) {
        return 0;}
      if (a.value > b.value) {
        return 1; }
      if (a.value < b.value) {
        return -1; }
    });

    let result = mapped.map(function(el) {
      return list[el.index];
    });
    return result;
}

module.exports = {
  sortByHeight
};
