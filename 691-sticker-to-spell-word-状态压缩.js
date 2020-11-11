/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
  //target is 'thehat'  // j 表示现在能拼出来 '11000' 'thxxxxx' 了
  // dp[i][j] 表示考虑前i个sticker 能够拼出j（字母set 10100010101 =>整型） 所需要的min number of sticker
  //前一轮的状态是 set 这一轮如果用word【i】 状态就是set | word[i]

  const n = target.length;
  const targetInt = 1 << n;
  //ans is dp[1<<n-1]

  const dp = Array(1 << n).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  //  console.log(1<<n,'1<<n')
  for (const sticker of stickers) {
    for (let set = 0; set < 1 << n; set++) {
      //能拼出的set
      const newSet = findNewSet(set, sticker);
      dp[newSet] = Math.min(dp[newSet], dp[set] + 1);
    }
  }
  //console.log(dp);
  return dp[(1 << n) - 1] === Number.MAX_SAFE_INTEGER ? -1 : dp[(1 << n) - 1];

  //若上一轮 此位是0 ，而且我（sticker） 有这一个char 就可以得到一个新的 set |= 1<<k
  function findNewSet(set, sticker) {
    for (const ch of sticker) {
      for (let i = 0; i < n; i++) {
        if (((set >> i) & 1) == 0 && target[i] == ch) {
          set |= 1 << i;
          break;
        }
      }
    }
    return set;
  }
};
