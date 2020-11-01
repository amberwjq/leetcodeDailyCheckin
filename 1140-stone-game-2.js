/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  // //[i][m] the current player max score when he can start from piles [i] with m
  const n = piles.length;
  const memo = Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = Array(2 * n).fill(-1);
  }

  const prefixSum = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + piles[i];
  }
  //  console.log(prefixSum);

  return helper(0, 1);

  function helper(i, m) {
    if (i >= n) return 0;
    //console.log('memo[i]',memo[i],i)
    if (memo[i][m] !== -1) return memo[i][m];
    // A[i]
    let max = 0;
    //如果我拿x个pile， 得到的分数是 pile【i：】所有pile的sum-下一轮对手拿的分数
    for (let x = 1; x <= 2 * m; x++) {
      max = Math.max(
        max,
        prefixSum[n] - prefixSum[i] - helper(i + x, Math.max(x, m))
      );
    }
    memo[i][m] = max;
    return max;
  }
};
