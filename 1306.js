/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const visited = Array(arr.length).fill(false);
  return helper(start);

  //pos is index
  function helper(pos) {
    if (pos < 0 || pos >= arr.length || visited[pos]) return false;
    if (arr[pos] === 0) return true;
    visited[pos] = true;
    return helper(pos + arr[pos]) || helper(pos - arr[pos]);
  }
};
