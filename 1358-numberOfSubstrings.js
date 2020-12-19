/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let i = 0;
  const n = s.length;
  const arr = [0, 0, 0];
  let res = 0;
  for (let j = 0; j < n; j++) {
    const cur = s[j].charCodeAt() - 'a'.charCodeAt();

    arr[cur]++;
    while (arr[0] && arr[1] && arr[2]) {
      arr[s[i++].charCodeAt() - 'a'.charCodeAt()]--;
    }
    //   console.log(arr,i,j)
    res += i; // j-i+1;
    /// [i-1 .. j] represents minimum length sub-array ending at j which has all three characterså
    // this subarray could be extended left till idx == 0 without compromising the count constraint
    // which is a total of length([0..i-1]) = i subarrays ending at j
  }
  return res;
};
