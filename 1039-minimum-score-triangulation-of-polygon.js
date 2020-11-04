/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function (A) {
  const n = A.length;
  const dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n).fill(Number.MAX_SAFE_INTEGER);
  }
  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = 0;
  }
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i + len - 1 <= n; i++) {
      let j = i + len - 1;
      for (let k = i + 1; k < j; k++) {
        // console.log(A[i]*A[j]*A[k],i,j,k)
        // console.log(dp[i][k],dp[k][j])
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + A[i] * A[j] * A[k]);
        //  console.log(dp[i][j])
      }
    }
  }

  return dp[0][n - 1];
};
