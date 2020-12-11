/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let i = 0;
  return helper(s);

  function helper(s) {
    const stack = [];
    let num = 0;
    let operator = '+';
    while (i < s.length) {
      const ch = s[i++];
      if (/\d/.test(ch)) {
        num = num * 10 + (ch - '0');
      }
      if (ch === '(') num = helper(s);
      //遇到运算符或者 s遍历完了 或者 遇到closing bracket， 得给stack push东西了
      if (
        i >= s.length ||
        ch === '+' ||
        ch === '-' ||
        ch === '*' ||
        ch === '/' ||
        ch === ')'
      ) {
        if (operator === '+') {
          stack.push(num);
        } else if (operator === '-') {
          stack.push(-num);
        } else if (operator === '*') {
          stack.push(num * stack.pop());
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
  }
};
