var StockSpanner = function () {
  this.stack = [];
  this.res = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  // 在我左边  以我为最大的 区间长度
  //所有被我吃掉元素的span 都加在我身上
  let span = 1;
  while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
    const [temp_price, temp_span] = this.stack.pop();
    span += temp_span;
  }
  this.stack.push([price, span]);
  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
