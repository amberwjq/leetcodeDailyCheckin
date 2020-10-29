/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  if (((1 + maxChoosableInteger) * maxChoosableInteger) / 2 < desiredTotal)
    return false;
  const state = Array(maxChoosableInteger + 1).fill(0); // state 0 not choosen
  const memo = new Map(); // string(state.toString() choose de state) => boolean (result)

  return dfs(desiredTotal, state);

  // Is it possible to win the game with the given state and target
  function dfs(target, state) {
    const key = state.toString();
    if (memo.has(key)) {
      return memo.get(key);
    }

    for (let i = 1; i < state.length; i++) {
      if (state[i] === 0) {
        state[i] = 1;
        //我拿完这个直接赢了 ｜｜ 下一轮 对手赢不了
        if (target - i <= 0 || !dfs(target - i, state)) {
          memo.set(key, true); //!!!!存的是key 而不是state.toString()！！！！
          state[i] = 0;

          return true;
        }
        state[i] = 0;
      }
    }
    memo.set(key, false);
    return false;
  }
};
