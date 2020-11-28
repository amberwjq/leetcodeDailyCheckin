/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const n = s.length;

  const dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n).fill(0);
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      let j = i + len - 1;
      dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i + 1][j]); //最差情况是这。。。。。。
      if (s[i] === s[j]) {
        dp[i][j] = Math.min(dp[i + 1][j - 1], dp[i][j]);
      }
      console.log(dp[i][j]);
    }
  }
  // console.log(dp)
  return dp[0][n - 1];
};
