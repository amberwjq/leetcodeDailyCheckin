/**
 * @param {string} s
 * @return {number}
 */

var calculate = function (s) {
  let i = 0;
  return helper(s);

  function helper(s) {
    const stack = [];
    let operator = '+';
    let num = 0;
    while (i < s.length) {
      const ch = s[i++];
      if (/\d/.test(ch)) {
        num = num * 10 + (ch.charCodeAt() - '0'.charCodeAt());
      }
      if (ch === '(') {
        num = helper(s);
      }
      if (i >= s.length || ch === '+' || ch === '-' || ch === ')') {
        if (operator === '+') {
          stack.push(num);
        } else {
          stack.push(-num);
        }
        operator = ch;
        num = 0;
      }
      if (ch === ')') break;
    }
    return stack.reduce((a, b) => a + b);
  }
};
