/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  // sum  at least s
  let i = 0;
  let len = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= s) {
      // console.log(i,j)
      len = Math.min(len, j - i + 1);
      sum -= nums[i++];
    }
  }
  return len === Number.MAX_SAFE_INTEGER ? 0 : len;
};
