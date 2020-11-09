/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  const n = arr.length;
  const dp = Array(n);
  const max = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n).fill(Number.MAX_SAFE_INTEGER);
    max[i] = Array(n).fill(Number.MIN_SAFE_INTEGER);
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
    max[i][i] = arr[i];
    sum += arr[i];
  }

  for (let len = 2; len <= n; len++)
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      // k 取 [i:j)
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] + dp[k + 1][j] + max[i][k] * max[k + 1][j]
        );
        max[i][j] = Math.max(max[i][k], max[k + 1][j]);
      }
    }

  return dp[0][n - 1];
};
