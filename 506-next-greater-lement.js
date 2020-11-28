/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  //只需把数组 再重复一次 concat起来
  // 如果重复一次 找不到最大，重复多少次也没有用
  const extenedNums = nums.concat(nums);
  const n = extenedNums.length;

  const stack = [];
  const res = Array(n);
  // console.log(n,extenedNums,res)
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= extenedNums[i]) {
      stack.pop();
    }
    res[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
    stack.push(extenedNums[i]);
  }
  // console.log(res)
  return res.slice(0, n / 2);
};
