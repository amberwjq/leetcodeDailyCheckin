/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function (maze, start, destination) {
  const row = maze.length;
  if (row === 0) return false;
  const col = maze[0].length;
  const queue = [start];
  maze[start[0]][start[1]] = 2;
  while (queue.length) {
    let size = queue.length;
    // console.log(queue)
    while (size--) {
      const [x, y] = queue.shift();
      // console.log(maze[x][y] ,x,y)
      if (x === destination[0] && y === destination[1]) return true;
      const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];
      for (const [dx, dy] of directions) {
        let newX = x + dx;
        let newY = y + dy;
        while (
          newX >= 0 &&
          newX < row &&
          newY >= 0 &&
          newY < col &&
          maze[newX][newY] !== 1
        ) {
          newX += dx;
          newY += dy;
        }
        // console.log('while after',newX,newY)
        newX -= dx;
        newY -= dy;
        if (maze[newX][newY] === 0) {
          //   console.log('push to queue',newX,newY);
          queue.push([newX, newY]);
          maze[newX][newY] = 2;
        }
      }
    }
  }
  return false;
};
