/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  const edges = [];
  const vetices = new Set();
  for (let i = 0; i < words.length - 1; i++) {
    const cur = words[i];
    const next = words[i + 1];
    let j = 0;

    while (j < Math.min(cur.length, next.length)) {
      if (cur[j] !== next[j]) {
        edges.push([cur[j], next[j]]);
        vetices.add(cur[j]);
        vetices.add(next[j]);
        break;
      }
      j++;
    }
  }
  console.log('edge', edges);
  console.log('vetices', vetices);
  // ["z","z"]
  if (edges.length === 0) return words[0];
  const numLetters = vetices.size;
  const inDegree = {};
  for (const [u, w] of edges) {
    inDegree[w] = inDegree[w] || 0;
    inDegree[w]++;
    inDegree[u] = inDegree[u] || 0;
  } // takes O(E)
  const queue = [];
  console.log(inDegree);
  for (const [index, n] of Object.entries(inDegree)) {
    // console.log('index n', index,n)
    if (n === 0) {
      queue.push(index);
    }
  } //take O(V)
  const res = [];
  // console.log(queue)
  while (queue.length) {
    const c = queue.shift();
    res.push(c);

    for (const pair of edges) {
      if (pair[0] === c) {
        inDegree[pair[1]]--;
        if (inDegree[pair[1]] === 0) {
          queue.push(pair[1]);
        }
      }
    }
  } //while loop 就是让所有的边小事
  console.log('res', res);
  return res.length === numLetters ? res.join('') : '';
};
