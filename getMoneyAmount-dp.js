/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  // 1 2 3 4 5
  // 我猜3的话，要么在【4，5】中再猜，要么在【1，2】中再猜。。。取最坏的结果 （两种情况中的max）
  // 区间型dp dp[i][j] 表示 在【i，j】中 the minimum amount of moeny you need to guarantee a win
  // 【i，j】中每个数都试一下，然后取min（ 如果选k 　dp[i][j] = k + Math.max(dp[i][k-1], dp[k+1][j])）

  const dp = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  }
  for (let i = 1; i < n; i++) {
    dp[i][i + 1] = Math.min(i, i + 1);
  }
  for (let i = 1; i <= n; i++) {
    dp[i][i] = 0;
  }
  // console.log(dp)
  for (let len = 3; len <= n; len++) {
    for (let i = 1; i + len - 1 <= n; i++) {
      let j = i + len - 1;
      for (let k = i + 1; k < j; k++) {
        // console.log(i,j,k);
        // console.log(dp[i][k-1],i,k-1);
        // console.log(dp[k+1][j],k+1,j);
        dp[i][j] = Math.min(dp[i][j], k + Math.max(dp[i][k - 1], dp[k + 1][j]));
      }
    }
  }
  return dp[1][n];
};
