var networkDelayTime = function (times, N, K) {
  const graph = {};
  for (const [u, v, w] of times) {
    graph[u] = graph[u] || [];
    graph[u].push([v, w]);
  }
  const dist = Array(N + 1).fill(Infinity);
  dist[K] = 0;

  const visited = new Map();
  let count = 0;
  let res = 0;

  const heap = new MinHeap((a, b) => dist[a] - dist[b]);
  heap.push(K);

  while (heap.size()) {
    let u = heap.pop();
    if (visited.has(u)) continue;
    visited.set(u, dist[u]);

    count++;
    res = Math.max(res, dist[u]);
    if (!graph[u]) continue;
    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        heap.push(v);
      }
    }
  }
  // count means how many v is visited/added to the tree  must === N

  return count < N ? -1 : res;
};

class MinHeap {
  data = [];
  comparator;
  constructor(comparator) {
    this.comparator = comparator || Heap.minComparator;
  }

  // O(1)
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  // O(log(n))
  push(value) {
    this.data.push(value);
    this.bubbleUp();
  }

  // O(log(n))
  pop() {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown();
    }
    return result;
  }

  // O(log(n))
  bubbleUp() {
    let i = this.size() - 1;
    let p = Math.floor((i - 1) / 2);
    while (i !== 0 && this.comparator(this.data[i], this.data[p]) < 0) {
      [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
      i = p;
      p = (i - 1) >> 1;
    }
  }

  // O(log(n))
  bubbleDown() {
    let i = 0;
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = i * 2 + 1;
      const rightIndex = i * 2 + 2;
      let next = i;
      for (const childIdx of [leftIndex, rightIndex]) {
        if (
          childIdx < this.data.length &&
          this.comparator(this.data[childIdx], this.data[next]) < 0
        ) {
          next = childIdx;
        }
      }
      if (i === next) break;
      this.swap(i, next);
      i = next;
    }
  }

  // O(1)
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  // O(1)
  size() {
    return this.data.length;
  }
}

/**
 *  Min Comparator
 */
MinHeap.maxComparator = (a, b) => {
  return b - a;
};
