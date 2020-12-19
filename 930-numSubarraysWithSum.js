/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function (A, S) {
  function atMost(S) {
    if (S < 0) return 0;
    let i = 0;
    let res = 0;
    for (let j = 0; j < A.length; j++) {
      S -= A[j];
      while (S < 0) {
        S += A[i++];
      }
      res += j - i + 1;
    }
    return res;
  }

  return atMost(S) - atMost(S - 1);
};
