/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  if (k > s.length) return s;
  if (s.length === 0) return s;
  let temp = '';
  const stack = [];
  for (const char of s) {
    if (stack.length && stack[stack.length - 1][0] === char) {
      if (stack[stack.length - 1][1] === k - 1) {
        stack.pop();
      } else {
        stack[stack.length - 1][1]++;
      }
    } else {
      stack.push([char, 1]);
    }
  }

  for (const [char, count] of stack) {
    temp += char.repeat(count);
  }
  return temp;
};
