/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (n, prerequisites, queries) {
  if (prerequisites.length === 0) return Array(queries.length).fill(false);
  const next = {};
  for (const [i, j] of prerequisites) {
    next[i] = next[i] || [];
    next[i].push(j);
  }
  // console.log(next)
  const isReachable = Array(n);
  for (let i = 0; i < n; i++) {
    isReachable[i] = Array(n).fill(false);
  }
  console.log('adj list', next);
  //  console.log(isReachable)
  //BFS on graph
  const queue = [];
  for (let i = 0; i < n; i++) {
    console.log('bfs', i);
    queue.push(i);
    while (queue.length) {
      const c = queue.shift();
      if (!next[c]) continue;
      for (const nei of next[c]) {
        if (isReachable[i][nei]) continue;
        console.log(i, nei, 'is reachable');
        isReachable[i][nei] = true; //注意！！！！是i->nei is reachable,not c->nei
        queue.push(nei);
        console.log('push to queue', nei);
      }
    }
  }
  //console.log(queue);
  const res = [];
  for (const [i, j] of queries) {
    res.push(isReachable[i][j]);
  }
  return res;
};
