/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    //dp[s] the max sum 
    const sum = stones.reduce((a,b)=>a+b);
    const upperLimit = Math.floor(sum/2);
    const dp = Array(upperLimit+1).fill(0);
    //s1-s2 = diff s1+s2 = sum;
    let s2 = 0;
    for(const stone of stones) {
        for(let s = upperLimit;s>=stone;s--) {
           // console.log(s);
            dp[s] = Math.max(dp[s],dp[s-stone]+stone);
            s2 = Math.max(s2,dp[s]);
        }
    }
    return sum-2*s2;
    
};