/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  //Knappack problem
  //loop all the items  then loop all the cost/sum

  //dp[i][s] denotes for nums[:i], how many ways to make sum of s
  //trasition formula is dp[i][s] = dp[i-1][s-nums[i]] + dp[i-1][s+nums[i]];
  const n = nums.length;
  const total = nums.reduce((a, b) => a + b);
  if (S > total || S < -total) return 0;
  let dp = Array(2 * total + 1).fill(0);
  dp[total] = 1;
  for (const x of nums) {
    // s index range 0~2*total, so need to add offset.
    const new_dp = Array(2 * total + 1).fill(0);
    for (let s = 0; s <= 2 * total; s++) {
      if (s + x <= 2 * total) {
        new_dp[s] += dp[s + x];
      }
      if (s - x >= 0) {
        new_dp[s] += dp[s - x];
      }
    }

    dp = new_dp;
  }
  return dp[S + total];
};
