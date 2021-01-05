/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const indegree = Array(numCourses).fill(0);
  for (const [u, v] of prerequisites) {
    indegree[u]++;
  }

  //console.log(indegree);
  const queue = [];
  for (const [index, n] of indegree.entries()) {
    if (n === 0) queue.push(index);
  }
  let count = 0;
  while (queue.length) {
    //  console.log(queue)
    let size = queue.length;

    const cur = queue.shift();
    count++;
    for (const [u, v] of prerequisites) {
      if (v === cur) {
        indegree[u]--;

        if (indegree[u] === 0) queue.push(u);
      }
    }
  }
  return numCourses === count;
};
