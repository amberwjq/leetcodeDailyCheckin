/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const total = nums.reduce((a, b) => a + b);
  let target = total - x;
  //  console.log(target,'t')
  if (target === 0) return nums.length;
  //find the largest sliding window that sum up to target
  let i = 0;
  let res = 0;
  for (let j = 0; j < nums.length; j++) {
    target -= nums[j];
    while (target < 0) {
      target += nums[i++];
    }
    // console.log(target,i,j)
    if (target === 0) {
      res = Math.max(res, j - i + 1);
    }
  }
  // console.log(res)
  return res === 0 ? -1 : nums.length - res;
};
