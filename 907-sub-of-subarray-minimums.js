/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function (A) {
  const mod = 1e9 + 7;
  const n = A.length;
  const preLess = Array(n);
  const nextLess = Array(n);
  let stack = [];
  //左边是严格bigger 右边是bigger
  // increasing stack
  // find the distance to the previous less element of A[i]
  // fin the span of the subarray in which A[i](left of A[i]) is the min

  for (let i = 0; i < n; i++) {
    let len = 1;
    while (stack.length && stack[stack.length - 1][0] > A[i]) {
      len += stack[stack.length - 1][1];
      stack.pop();
    }

    // save the index,
    preLess[i] = len;
    stack.push([A[i], len]);
  }

  stack = [];
  // find the next less element
  for (let i = n - 1; i >= 0; i--) {
    let len = 1;

    while (stack.length && stack[stack.length - 1][0] >= A[i]) {
      len += stack[stack.length - 1][1];
      stack.pop();
    }
    // save the len, not the element
    nextLess[i] = len;
    stack.push([A[i], len]);
  }
  console.log(preLess, nextLess);
  let res = 0;
  for (let i = 0; i < n; i++) {
    res = (res + preLess[i] * nextLess[i] * A[i]) % mod;
  }

  return res;
};
