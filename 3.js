/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let i = 0;
  let res = 0;
  for (let j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    map.set(s[j], j);
    res = Math.max(res, j - i + 1);
  }
  return res;
};
