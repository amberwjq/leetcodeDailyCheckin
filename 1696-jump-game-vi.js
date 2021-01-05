/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  //dp[i] denotes the the max score  for index i
  //dp[i] = max{ dp[i-1],dp[i-2]......dp[i-k] }+nums[i]
  const n = nums.length;
  const dp = Array(n).fill(0);
  const queue = [nums[0]];
  dp[0] = nums[0];
  // dp[1] = nums[0]+nums[1];

  for (let i = 1; i < n; i++) {
    //先把dp算出来，再拿dp值，update 单调栈

    const max = queue[0];
    dp[i] = max + nums[i];
    while (queue.length && queue[queue.length - 1] < dp[i]) {
      queue.pop();
    }

    queue.push(dp[i]);
    if (i - k >= 0 && queue[0] === dp[i - k]) {
      queue.shift();
    }
  }

  return dp[n - 1];
};
