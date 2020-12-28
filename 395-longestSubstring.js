/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  //本题要求 freq at least k
  //把freq《k的char 排除在外。。。recursion
  const freq = Array(26).fill(0);
  for (const c of s) {
    const code = c.charCodeAt() - 'a'.charCodeAt();
    freq[code]++;
  }
  let atLeastK = true;
  for (const c of s) {
    const code = c.charCodeAt() - 'a'.charCodeAt();
    if (freq[code] < k) {
      atLeastK = false;
      break;
    }
  }
  //recursion base case当全部char 都符合条件时。。。
  if (atLeastK) return s.length;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt() - 'a'.charCodeAt();
    if (freq[code] < k) continue;
    let j = i; //找到满足条件的i，开始往右expand 找j

    while (j < s.length && freq[s[j].charCodeAt() - 'a'.charCodeAt()] >= k) {
      j++;
    }
    //   console.log(i,j)
    res = Math.max(res, longestSubstring(s.substring(i, j), k));
    i = j;
  }
  return res;
};
