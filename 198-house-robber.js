/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  let no = 0;
  let yes = 0;
  for (const num of nums) {
    rob = rob;
    let temp_no = no;
    no = Math.max(yes, no);
    yes = temp_no + num;
  }
  return Math.max(no, yes);
};
