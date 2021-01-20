/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, destination) {
  const row = maze.length;
  if (row === 0) return false;
  const col = maze[0].length;
  const queue = [start];
  const dists = Array(row);
  for (let i = 0; i < row; i++) {
    dists[i] = Array(col).fill(-1);
  }
  dists[start[0]][start[1]] = 0;
  while (queue.length) {
    //  console.log(queue,dists)
    let [x, y] = queue.shift();
    //!!Need to find the shortest distance. so can't stop when x, y is destination..need to search all.
    //if (x === destination[0] && y === destination[1]) return dists[x][y];
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (const [dx, dy] of directions) {
      let newX = x;
      let newY = y;
      let dist = dists[newX][newY];
      while (isValid(newX + dx, newY + dy)) {
        newX += dx;
        newY += dy;
        dist++;
      }
      // console.log('while after',newX,newY)
      if (dists[newX][newY] === -1 || dist < dists[newX][newY]) {
        //   console.log('push to queue',newX,newY);
        queue.push([newX, newY]);
        dists[newX][newY] = dist;
      }
    }
  }
  return dists[destination[0]][destination[1]];

  function isValid(x, y) {
    return x >= 0 && y >= 0 && x < row && y < col && maze[x][y] === 0;
  }
};
