/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      map.set(stack.pop(), nums2[i]);
    }
    stack.push(nums2[i]);
  }

  const res = [];
  for (const num of nums1) {
    res.push(map.get(num) || -1);
  }
  return res;
};
