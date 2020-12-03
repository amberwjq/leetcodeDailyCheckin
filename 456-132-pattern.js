/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  if (nums.length <= 2) return false;
  let secondMax = -Infinity;
  const n = nums.length;
  const stack = [];
  for (let i = n - 1; i >= 0; i--) {
    if (stack.length && nums[i] < secondMax) return true;
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      secondMax = stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
};
