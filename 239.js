/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  //descreasing monotonic queue
  //5,4,2,3
  const res = [];
  const queue = [];
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && queue[queue.length - 1] < nums[i]) {
      queue.pop();
    }
    queue.push(nums[i]);
    if (i - k + 1 >= 0) {
      res.push(queue[0]);
      if (queue[0] === nums[i - k + 1]) {
        queue.shift();
      }
    }
  }
  return res;
};
