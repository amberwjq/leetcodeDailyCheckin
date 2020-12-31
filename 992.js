/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
  function atMost(k) {
    const map = new Map();
    let i = 0;
    let res = 0;
    for (let j = 0; j < A.length; j++) {
      if (!map.has(A[j])) {
        k--;
      }
      map.set(A[j], (map.get(A[j]) || 0) + 1);
      while (k < 0) {
        if (map.get(A[i]) === 1) {
          map.delete(A[i]);
          k++;
        } else {
          map.set(A[i], map.get(A[i]) - 1);
        }
        i++;
      }
      console.log(j, i);
      res += j - i + 1;
    }
    return res;
  }

  return atMost(K) - atMost(K - 1);
};
