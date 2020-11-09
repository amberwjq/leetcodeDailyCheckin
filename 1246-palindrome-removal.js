/**
 * @param {number[]} arr
 * @return {number}
 */
var minimumMoves = function (arr) {
  const n = arr.length;
  const dp = Array(n + 2);
  arr.unshift('#');
  for (let i = 0; i <= n + 1; i++) {
    dp[i] = Array(n + 2).fill(0);
  }
  // console.log(dp)

  //why dp size need to be n+2
  //k+1  n+1
  for (let len = 1; len <= n; len++) {
    for (let i = 1; i + len - 1 <= n; i++) {
      let j = i + len - 1;
      dp[i][j] = Number.MAX_SAFE_INTEGER / 2;
      for (let k = i; k <= j; k++) {
        if (arr[j] === arr[k]) {
          dp[i][j] = Math.min(
            dp[i][j],
            dp[i][k - 1] + Math.max(1, dp[k + 1][j - 1])
          );
        } else {
          dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
        }
      }
    }
  }
  // console.log(dp)
  return dp[1][n];
};
