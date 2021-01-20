/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  // 每一位 可以往上拨，或者往下拨 ， 四位。。每一次可以有8种可能性
  const visited = new Set();
  const deadEnds = new Set(deadends);
  const queue = ['0000'];
  if (deadEnds.has('0000')) return -1; //corner case 1
  if (target === '0000') return 0; //cornet case 2
  let step = 0;
  while (queue.length) {
    let size = queue.length;
    step++;
    while (size--) {
      const cur = queue.shift();
      for (let i = 0; i < 4; i++) {
        // i代表每一位
        for (let j = -1; j <= 1; j += 2) {
          //j = -1  往下拨   j = 1 往上拨
          const newArr = cur.split(''); // js string is immutable, 只能转成arr， 再mutate那一位的char

          newArr[i] = (cur[i] - '0' + j + 10) % 10;

          const newStr = newArr.join('');

          if (newStr === target) return step;
          if (deadEnds.has(newStr) || visited.has(newStr)) continue;
          queue.push(newStr);
          visited.add(newStr);
        }
      }
    }
  }
  return -1;
};
