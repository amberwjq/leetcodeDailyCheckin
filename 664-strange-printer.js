/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  // i         k      j
  // a xxxxxx  a xxxxxx
  // 反正得print a， 如果 能找到一个s[k]是a，就一块print了
  // dp[i][j] = dp[i][k-1]+dp[k+1]dp[j]
  // print a 和print a xxxxxx a 是一样的成本

  const n = s.length;
  if (n === 0) return 0;
  const dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n).fill(Number.MAX_SAFE_INTEGER / 2);
  }
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      let j = i + len - 1;
      dp[i][j] = 1 + dp[i + 1][j]; //dp[i][j] 最差可以这样 ！！！不要放在k 循环内
      for (let k = i + 1; k <= j; k++) {
        if (s[i] === s[k]) {
          dp[i][j] = Math.min(
            dp[i][k - 1] + (k + 1 > j ? 0 : dp[k + 1][j]),
            dp[i][j]
          );
        }
      }
    }
  }
  return dp[0][n - 1];
};
