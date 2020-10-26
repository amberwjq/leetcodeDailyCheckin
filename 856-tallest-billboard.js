/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function(rods) {
  //dp[d] denotes when the left-right difference is d, the height of left side
    // answer is dp[0]
    //每次选棍子，要么放左边，要么放右边，要么不放
    //高度差 的range是-total~total
     const n = rods.length;
    if(n===0) return 0;
    const total = rods.reduce((a,b)=>a+b);
   
    dp = Array(2*total+1).fill(-1); //left ,right rod can't make it a different like this.
    dp[total] = 0;
    for(const x of rods) {
        const dp_temp = dp.slice();
        for(let d = -total;d<=total;d++) {
            if(dp_temp[d+total] === -1) continue;
            if(d+x<=total) {
                dp[d+x+total] = Math.max(dp[d+x+total], dp_temp[d+total]+x)//put it on left side
            }
            if(d-x+total>=0) {
                 dp[d-x+total] = Math.max(dp[d-x+total], dp_temp[d+total])//put it on right side
            }
           
        }
    }
    
    return dp[total]
    
};