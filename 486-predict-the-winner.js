/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
//     dp[i][j] denote the largest score we can get from s[i:j]
//     we can choose nums[i] or nums[j]
//     if we choose nums[i], the opponent will choose 　nums[i+1] or nums[j]
//     the smart opponent will maximize his score from his round, The worse case is that we will get the minimal value out of all possible situation after our opponent makes its move. Our situation is dp[i+2][j] or dp[i+1,j-1] 
    //区间型dp
    
    const n = nums.length;
    if(n===0) return false;
    if(n===1) return true;
    const total = nums.reduce((a,b)=>a+b);
    const dp = Array(n);
    for(let i = 0;i<n;i++) {
        dp[i] = Array(n);
    }
    for(let i = 0;i<n;i++) {
        dp[i][i] = nums[i];
    }
    for(let i = 0;i<n-1;i++) {
        dp[i][i+1] = Math.max(nums[i],nums[i+1]);
    }
    for(let len = 3;len<=n;len++) {
        for(let i = 0;i+len-1<n;i++) {
            let j = i+len-1;

            dp[i][j] = Math.max(nums[i]+Math.min(dp[i+2][j],dp[i+1][j-1]), nums[j]+Math.min(dp[i+1][j-1],dp[i][j-2]))
        }
    }
    //if we can collect more then total/2, we will win

    return dp[0][n-1] *2>=total;
    
};