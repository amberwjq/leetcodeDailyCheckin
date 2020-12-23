/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  let k = 2;
  let i = 0,
    res = 0;
  let map = new Map();
  for (let j = 0; j < s.length; j++) {
    if (!map.has(s[j])) {
      k--;
    }
    map.set(s[j], (map.get(s[j]) || 0) + 1);
    while (k < 0) {
      if (map.get(s[i]) === 1) {
        map.delete(s[i]);
        k++;
      } else {
        map.set(s[i], map.get(s[i]) - 1);
      }
      i++;
    }
    res = Math.max(res, j - i + 1);
  }
  return res;
};
