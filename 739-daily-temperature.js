/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  // 距离next greater element  span
  const n = T.length;
  if (n === 0) return [];
  const stack = [];
  const res = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1][0] <= T[i]) {
      stack.pop();
    }
    res[i] = stack.length > 0 ? stack[stack.length - 1][1] - i : 0;
    stack.push([T[i], i]);
    //  console.log(stack)
  }
  return res;
};
