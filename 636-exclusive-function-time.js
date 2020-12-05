/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const res = Array(n).fill(0);
  const [firstId, firstStatus, firstTimeStamp] = logs[0].split(':');
  const stack = [];
  stack.push(firstId);
  let prev = Number(firstTimeStamp);
  for (let i = 1; i < logs.length; i++) {
    const [id, status, timeStamp] = logs[i].split(':');
    if (status === 'start') {
      const top = stack[stack.length - 1];
      res[top] += Number(timeStamp) - prev;
      prev = Number(timeStamp);
      stack.push(id);
    } else {
      const pop = stack.pop();
      res[pop] += Number(timeStamp) - prev + 1;
      prev = Number(timeStamp) + 1;
    }
  }
  return res;
};
