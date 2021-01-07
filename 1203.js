/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */

//  5
// 5
// [2,0,-1,3,0]
// [[2,1,3],[2,4],[],[],[]]
var sortItems = function (n, m, group, beforeItems) {
  // { '0': [ 3, 4, 6 ], '1': [ 2, 5 ], '-1': [ 0, 1, 7 ] }
  // 不说明 0,1,7 belong to group -1...they don't belong to any group...so better //create a new group for each of them [0] [1] [7]
  const groupItems = {};
  let nextGroupId = m;
  for (let i = 0; i < n; i++) {
    if (group[i] === -1) {
      group[i] = nextGroupId;
      nextGroupId++;
    }
    groupItems[group[i]] = groupItems[group[i]] || [];
    groupItems[group[i]].push(i);
  }

  // groupItems { '0': [ 1, 4 ], '2': [ 0 ], '3': [ 3 ], '5': [ 2 ] }

  // build graph inside each group
  // only care nodes that inside same group
  let next = {};
  let inDegree = {};
  for (let i = 0; i < n; i++) {
    inDegree[i] = inDegree[i] || 0;
    for (const j of beforeItems[i]) {
      //建 edges j->i
      if (group[i] !== group[j]) continue; //只在乎 属于同一个group的node

      next[j] = next[j] || [];
      next[j].push(i);

      inDegree[i] = inDegree[i] || 0;
      inDegree[i]++;
    }
  }
  // inDegree { '0': 0, '1': 1, '2': 0, '3': 0, '4': 0 }
  // next { '4': [ 1 ] }
  //sort between groupItems

  const groupItemsOrder = {};
  //sort within group
  for (const groupId in groupItems) {
    groupItemsOrder[groupId] = topoSort(groupItems[groupId], next, inDegree);
      if( groupItemsOrder[groupId].length === 0) return []
  }
//console.log('groupItemsOrder', groupItemsOrder)
  // groupItemsOrder { '0': [ 4, 1 ], '2': [ 0 ], '3': [ 3 ], '5': [ 2 ] }

  // 把每个组sort  根据 j->i  [(2, 0, 5, 3, 0)]=>[ 5, 3, 0, 2 ]
  // build graph among groups
  next = {};
  inDegree = {};

  const groups = Array.from(new Set(group));
  for (const group of groups) {
    inDegree[group] = 0;
  }
  for (let i = 0; i < n; i++) {
    for (const j of beforeItems[i]) {
      if (group[i] === group[j]) continue;

      next[group[j]] = next[group[j]] || [];
      next[group[j]].push(group[i]);
      inDegree[group[j]] = inDegree[group[j]] || 0;
      inDegree[group[i]] = inDegree[group[i]] || 0;
      inDegree[group[i]]++;
    }
  }

  //   next { '0': [ 2 ], '3': [ 2 ], '5': [ 2, 0 ] }
  // inDegree { '0': 1, '2': 3, '3': 0, '5': 0 }
  //sort by group

  const groupsOrder = topoSort(groups, next, inDegree);

  const res = [];
  for (const group of groupsOrder) {
    for (const node of groupItemsOrder[group]) {
      res.push(node);
    }
  }
  return res;

  function topoSort(nodes, next, inDegree) {
    const queue = [];
    for (const node of nodes) {
      if (inDegree[node] === 0) {
        queue.push(node);
      }
    }

    const res = [];
    while (queue.length) {
      const c = queue.shift();
      res.push(c);
      if (!next[c]) continue;

      for (const nei of next[c]) {
        inDegree[nei]--;
        if (inDegree[nei] === 0) {
          queue.push(nei);
        }
      }
    }

    if (res.length !== nodes.length) {
      return [];
    } else {
      return res;
    }
  }
};
