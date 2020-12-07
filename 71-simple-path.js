/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const split = path.split('/');
  //   console.log(split)
  const finalPath = [];
  while (split.length) {
    const target = split.shift();

    if (target === '' || target === '.') {
      continue;
    } else if (target === '..') {
      //  console.log('pop', finalPath)
      finalPath.pop();
    } else {
      finalPath.push(target);
    }
    //   console.log(finalPath)
  }

  return '/' + finalPath.join('/');
};
