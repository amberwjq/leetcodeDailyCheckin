/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  const maxD = [];
  const minD = [];
  let i = 0;
  let res = -Infinity;
  for (let j = 0; j < nums.length; j++) {
    while (maxD.length && maxD[maxD.length - 1] < nums[j]) {
      maxD.pop();
    }
    while (minD.length && minD[minD.length - 1] > nums[j]) {
      minD.pop();
    }
    minD.push(nums[j]);
    maxD.push(nums[j]);

    if (maxD[0] - minD[0] > limit) {
      //  console.log('maxmin',maxD[0],minD[0])
      if (maxD[0] === nums[i]) maxD.shift();
      if (minD[0] === nums[i]) minD.shift();
      ++i;
    }
    //   console.log(j-i+1,j,i)
    res = Math.max(res, j - i + 1);
  }
  return res;
};
