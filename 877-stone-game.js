/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  const n = piles.length;
  const total = piles.reduce((a, b) => a + b);
  //odd number of pile sum
  let oddSum = 0;
  for (let i = 0; i < n; i = i + 2) {
    oddSum += piles[i];
  }
  let evenSum = 0;
  for (let i = 1; i < n; i = i + 2) {
    evenSum += piles[i];
  }
  return evenSum * 2 > total || oddSum * 2 > total;
};
