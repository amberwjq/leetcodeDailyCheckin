/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  // xxxxi
  // yyyyj
  const m = s1.length;
  const n = s2.length;
  s1 = '#' + s1;
  s2 = '#' + s2;
  const dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(Number.MAX_SAFE_INTEGER / 2);
  }
  dp[0][0] = 0;
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1[i].charCodeAt();
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2[j].charCodeAt();
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i] === s2[j]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1[i].charCodeAt(),
          dp[i][j - 1] + s2[j].charCodeAt()
        );
      }
    }
  }
  return dp[m][n];
};
