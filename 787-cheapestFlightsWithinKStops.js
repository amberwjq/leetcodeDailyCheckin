/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    //dp[k][c] 表示搭乘 k次 flight 到点c 
    // 就可以搭乘k-1次飞机到点b，再用cost w 到达c
    // 不用去想src和dst。。。只需要考虑到某一点的路径。。。。。
    // K stop 相当于乘坐K+1 次飞机
    
    //dp[k][c] = dp[k-1][b]+cost[b][c]
    const dp = Array(K+2);
    for(let k = 0;k<=K+1;k++) {
        dp[k] = Array(n).fill(Number.MAX_SAFE_INTEGER/2);
    }
    
    dp[0][src]=0;//当k为0时，不坐飞机，只能到src。。。
    for(let k = 1;k<=K+1;k++) {
        for(let i = 0;i<n;i++) {
            //只能是有到i的航班，才能去更新dp
            for(const [u,v,w] of flights) {
                if(v===i) {
                    dp[k][i] = Math.min(dp[k][i],dp[k-1][u]+w);
                }
            }
        }
    }
    
    let res = Number.MAX_SAFE_INTEGER/2;
    //dp[k][dst]
    for(let k = 0;k<=K+1;k++) {
        // dst 4503599627370495.5
        // dst 500
        // dst 200
        res = Math.min(res,dp[k][dst]);
    }
    
    return res === Number.MAX_SAFE_INTEGER/2?-1: res
};