/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let count = k;
  const stack = [];
  for (let c of num) {
    while (stack.length && stack[stack.length - 1] > c && count) {
      stack.pop();
      count--;
    }
    stack.push(c);
  }
  while (count > 0) {
    stack.pop();
    count--;
  }
  // remove the leading zero
  while (stack[0] === '0') {
    stack.shift();
  }
  // console.log(stack)
  return stack.length ? stack.join('') : '0';
};
//"10200"   1  return "0200"...remove the leading zero
// 都把所有元素都遍历结束后，如果发现仍然count<k，那么就把Stack末尾的弹出，直至count==k
// 需要去除结果里的前导零。
