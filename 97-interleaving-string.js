/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  //  dp[i][j] 定义是 s1[1:i] s2[1:j] can form s3[1:i+j]
  const n1 = s1.length;
  const n2 = s2.length;
  const n3 = s3.length;
  if (n1 + n2 != n3) return false;
  const dp = Array(n1);
  for (let i = 0; i <= n1; i++) {
    dp[i] = Array(n2 + 1).fill(0);
  }
  dp[0][0] = 1;

  for (let i = 1; i <= n1; i++) {
    if (dp[i - 1][0] == 1 && s1[i] == s3[i]) dp[i][0] = 1;
  }

  for (let j = 1; j <= n2; j++) {
    if (dp[0][j - 1] == 1 && s2[j] == s3[j]) dp[0][j] = 1;
  }

  for (let i = 1; i <= n1; i++)
    for (let j = 1; j <= n2; j++) {
      if (dp[i - 1][j] == 1 && s1[i] == s3[i + j]) dp[i][j] = 1;
      else if (dp[i][j - 1] == 1 && s2[j] == s3[i + j]) dp[i][j] = 1;
    }
  console.log(dp);
  return dp[n1][n2];
};
