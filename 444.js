/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
var sequenceReconstruction = function (org, seqs) {
  let indegree = {},
    graph = {};
  if (org.length <= 0) return false;

  seqs.forEach((sequence) => {
    for (let i = 0; i < sequence.length; i++) {
      indegree[sequence[i]] = 0;
      graph[sequence[i]] = [];
    }
  });

  seqs.forEach((sequence) => {
    for (let i = 1; i < sequence.length; i++) {
      let p = sequence[i - 1];
      let q = sequence[i];
      graph[p].push(q);
      indegree[q]++;
    }
  });
  console.log(indegree);
  console.log('graph', graph);
  if (Object.keys(indegree).length !== org.length) {
    return false;
  }
  let seqP = [];
  let result = [];
  for (let v in indegree) {
    if (indegree[v] === 0) {
      seqP.push(v);
    }
  }
  while (seqP.length > 0) {
    if (seqP.length > 1) return false; //because it cant have more than one set of sequence
    if (org[result.length] != seqP[0]) return false;
    let top = seqP.shift();
    result.push(top);

    graph[top].forEach((v) => {
      indegree[v]--;
      if (indegree[v] === 0) seqP.push(v);
    });
  }
  console.log(result);
  return result.length === org.length;
};
