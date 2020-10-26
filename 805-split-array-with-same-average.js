/**
 * @param {number[]} A
 * @return {boolean}
 */
var splitArraySameAverage = function(A) {
    // B C的average === A的average
    // sum/count === total/n
    //转换成乘法 sum*n === count*total
    //             已知       已知
    // sum 和 count的配对。。。。 问题转换为 可以找count个数，使其和是sum
    const n = A.length;
    const total = A.reduce((a,b)=>a+b);
    for(let count = 1;count<n;count++) {
        if(count*total%n !== 0) continue //pruning！！！！
        const sum = count*total/n;
        if( dfs(count,sum,0))  {
            return true;
        }
        continue;
    }
    return false;
    
    function dfs(count,sum,index) {
        if(count===0 && sum ===0) return true;
        if(count === 0 || sum === 0) return false;
        if(index===n) return false;
        // 用index这个数
       if( dfs(count-1,sum-A[index],index+1)) return true;
        //去重，这个数不用的话， 以后跟他一样的数 也都不用
        let i = index;
        while(A[i] === A[index] && i<n) {
            i++;
        }
        //不用index这个数
       if( dfs(count,sum,i)) return true;
        return false;
    }
};