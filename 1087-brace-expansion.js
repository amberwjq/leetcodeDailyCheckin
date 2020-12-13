/**
 * @param {string} S
 * @return {string[]}
 */
var expand = function (S) {
  let re = /{|}/gi;
  const temp = S.replace(re, '#').split('#'); //.filter(item=>item!=='')
  //  这块先不要filter 空string 因为 “ab“=>[ 'ab' ] "{a,b}"=>[ '', 'a,b', '' ]
  // have to differentie them first.

  if (temp.length === 1) return [temp[0]]; //only "ab" can directly return,"{a,b}" cannot.
  const candidate = temp.filter((item) => item !== '');
  const res = [];
  backtracking(0, '');
  return res;

  function backtracking(index, cur) {
    if (candidate.length === index) {
      res.push(cur);
      return;
    }
    const options = candidate[index]
      .split(',')
      .sort((a, b) => a.localeCompare(b));
    //  console.log('options',options)
    for (let i = 0; i < options.length; i++) {
      backtracking(index + 1, cur + options[i]); //递归时传参时加新的char，不要直接改变cur！！！！！！！
    }
  }
};
