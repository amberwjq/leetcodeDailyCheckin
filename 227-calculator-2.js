/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let i = 0;
  const stack = [];
  let operator = '+';
  let num = 0;
  while (i < s.length) {
    const ch = s[i++];
    if (/\d/.test(ch)) {
      num = num * 10 + (ch.charCodeAt() - '0'.charCodeAt());
    }
    if (i >= s.length || ch === '+' || ch === '-' || ch === '*' || ch === '/') {
      if (operator === '+') {
        stack.push(num);
      } else if (operator === '-') {
        stack.push(-num);
      } else if (operator === '*') {
        stack.push(stack.pop() * num);
      } else if (operator === '/') {
        if (stack[stack.length - 1] > 0) {
          stack.push(Math.floor(stack.pop() / num));
        } else {
          stack.push(Math.ceil(stack.pop() / num)); //-3/2=-1   3/2=1
        }
      }
      operator = ch;
      num = 0;
    }
    if (ch === ')') break;
  }
  return stack.reduce((a, b) => a + b);
};
