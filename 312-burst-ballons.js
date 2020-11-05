/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length;
  const dp = Array(n + 2);
  for (let i = 0; i <= n + 1; i++) {
    dp[i] = Array(n + 2).fill(0);
  }
  nums.unshift(1);
  nums.push(1);

  for (let len = 1; len <= n; len++) {
    for (let i = 1; i + len - 1 <= n; i++) {
      let j = i + len - 1;
      for (let k = i; k <= j; k++) {
        // k can be i and j eventhough dp[i][i-1]..value is 0, so that's ok
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k - 1] + dp[k + 1][j] + nums[i - 1] * nums[k] * nums[j + 1]
        );
      }
    }
  }

  return dp[1][n];
};
