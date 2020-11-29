/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
  const stack = [];
  const len = nums.length;
  let toRemove = len - k;
  //console.log(toRemove);
  for (let i = 0; i < len; i++) {
    while (stack.length && stack[stack.length - 1] > nums[i] && toRemove > 0) {
      stack.pop();
      toRemove--;
    }
    stack.push(nums[i]);
  }
  return stack.slice(0, k);
};
