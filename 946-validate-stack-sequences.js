/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let i = 0;
  for (const x of pushed) {
    stack.push(x);
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      // console.log(stack,'keep pop',i)
      stack.pop();
      i++;
    }
  }
  return stack.length === 0;
};
