/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
  // dp[0] the max score Alice can get
  // dp[i] choose from index i, the max score the current player can get

  // //[i][m] the current player max score when he can start from piles [i] with m
  const n = stoneValue.length;
  const total = stoneValue.reduce((a, b) => a + b);
  const memo = Array(n).fill(-1);

  const prefixSum = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + stoneValue[i];
  }
  //  console.log(prefixSum);

  const score = helper(0);
  //console.log(score,'score')
  if (score * 2 > total) {
    return 'Alice';
  } else if (score * 2 === total) {
    return 'Tie';
  } else {
    return 'Bob';
  }

  function helper(i) {
    if (i >= n) return 0; //console.log('memo[i]',memo[i],i)
    if (memo[i] !== -1) return memo[i];
    // A[i]
    let max = Number.MIN_SAFE_INTEGER;
    for (let x = 1; x <= 3; x++) {
      max = Math.max(max, prefixSum[n] - prefixSum[i] - helper(i + x));
    }
    memo[i] = max;
    return max;
  }
};
