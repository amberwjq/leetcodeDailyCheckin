/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  function atMost(k) {
    if (k < 0) return 0;
    let i = 0;
    let res = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % 2 !== 0) {
        k--;
      }
      while (k < 0) {
        if (nums[i++] % 2 !== 0) {
          k++;
        }
      }

      res += j - i + 1;
    }
    return res;
  }
  return atMost(k) - atMost(k - 1);
};
