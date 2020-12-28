/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  const map = new Map();
  let i = 0;
  let res = 0;
  for (let j = 0; j < s.length; j++) {
    if (!map.has(s[j])) {
      k--;
    }
    map.set(s[j], (map.get(s[j]) || 0) + 1);
    while (k < 0) {
      if (map.get(s[i]) === 1) {
        k++;
        map.delete(s[i]);
      } else {
        map.set(s[i], map.get(s[i]) - 1);
      }
      i++;
    }
    res = Math.max(res, j - i + 1);
  }
  return res;
};
