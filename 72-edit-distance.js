/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  //dp[i][j]
  const m = word1.length;
  const n = word2.length;
  if (m === 0 && n === 0) return 0;
  const dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0);
  }

  //dp[i][0]=i。同理，dp[0][j]=j
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  word1 = '#' + word1;
  word2 = '#' + word2;
  //console.log(dp);
  // console.log(dp[0][1])
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          Math.min(dp[i - 1][j - 1] + 1, dp[i - 1][j] + 1),
          dp[i][j - 1] + 1
        );
      }
    }
  }
  return dp[m][n];
};
