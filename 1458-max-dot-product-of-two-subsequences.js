/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function (nums1, nums2) {
  // xxxxxxi
  // yyyyyyj
  // dp[i][j] denote the max dot product bwteen the subsequence of nums1[:i] and nums2[:j] with same lenth
  // if nums1[i] * nums2[j] >0  dp[i][j] = dp[i-1]dp[j-1] + nums1[i] * nums2[j]
  // else dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])

  const m = nums1.length;
  const n = nums2.length;
  nums1.unshift('#');
  nums2.unshift('#');
  const dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(Number.MIN_SAFE_INTEGER / 2);
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = nums1[i] * nums2[j]; //至少可以是这个。。。。。
      dp[i][j] = Math.max(
        dp[i][j],
        dp[i - 1][j],
        dp[i][j - 1],
        dp[i - 1][j - 1] + nums1[i] * nums2[j]
      );
    }
  }

  return dp[m][n];
};
