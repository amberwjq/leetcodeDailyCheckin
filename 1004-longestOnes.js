/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  //a sliding window contains at most k ge 0
  let count = 0;
  let i = 0;
  let res = 0;
  for (let j = 0; j < A.length; j++) {
    if (A[j] === 0) {
      K--;
    }
    while (K < 0) {
      if (A[i++] === 0) K++; //先判断是不是0，再移动i
    }
    // console.log(i,j)
    res = Math.max(res, j - i + 1);
  }
  return res;
};
