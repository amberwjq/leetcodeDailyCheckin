/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function (A) {
  const N = A.length;
  const stack = [];
  for (let i = 0; i < N; i++) {
    if (stack.length === 0 || stack[stack.length - 1][0] > A[i]) {
      stack.push([A[i], i]);
    }
  }
  console.log(stack);
  let res = 0;
  for (let i = N - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1][0] <= A[i]) {
      const ramp = i - stack.pop()[1];
      console.log('ramp', ramp, i);
      res = Math.max(res, ramp);
    }
  }
  return res;
};
