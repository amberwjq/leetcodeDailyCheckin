class MinHeap {
  data = [];
  comparator;
  constructor(data = []) {
    this.comparator = (a, b) => a - b; //b-a for maxHeap, a-b for minHeap;
    for (let d of data) {
      this.push(d);
    }
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
