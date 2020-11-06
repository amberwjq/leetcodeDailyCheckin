/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
  //     这一刀从哪儿切 ？从k切的话，就变成了两个子问题
  //  [0 1 3 4 5 7]只看这个array，不要被尺子上的刻度 干扰
  // dp[i][j] = dp[i][k]+dp[k][j]+len(j-i)
  cuts.sort((a, b) => a - b);
  const new_cuts = cuts.slice();
  new_cuts.push(n);
  new_cuts.unshift(0);

  const N = new_cuts.length;
  const dp = Array(N);
  for (let i = 0; i < N; i++) {
    dp[i] = Array(N).fill(Number.MAX_SAFE_INTEGER / 3);
  }
  for (let i = 0; i < N - 1; i++) {
    dp[i][i + 1] = 0;
  }

  for (let len = 2; len <= N; len++) {
    for (let i = 0; i + len <= N; i++) {
      let j = i + len;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][k] + dp[k][j] + new_cuts[j] - new_cuts[i],
          dp[i][j]
        );
      }
    }
  }

  return dp[0][N - 1];
};
