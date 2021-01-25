/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const directions = [
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let steps = 0;
  const q = [];
  const seen = Array(1 << (n * m));
  let start = 0;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      start |= mat[y][x] << (y * n + x);
    }
  }
  q.push(start);
  seen[start] = 1;
  while (q.length) {
    let size = q.length;
    while (size--) {
      const s = q.shift();
      if (s === 0) return steps;
      for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
          let t = flip(s, x, y);
          if (seen[t]) continue;
          seen[t] = 1;
          q.push(t);
        }
      }
    }
  }
  return -1;

  function flip(s, x, y) {
    for (const [dx, dy] of directions) {
      const tx = x + dx;
      const ty = y + dy;
      if (tx < 0 || tx >= m || ty < 0 || ty >= n) continue;
      s ^= 1 << (n * tx + ty);
    }
  }
};
