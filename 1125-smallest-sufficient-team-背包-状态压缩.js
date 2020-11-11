/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function (req_skills, people) {
  const n = req_skills.length;
  const target = 1 << (n - 1);
  //先把每个人的技能 转化成 整型
  const skills = [];
  for (const p of people) {
    let mask = 0;
    for (const skill of p) {
      const index = req_skills.indexOf(skill); //这个skill的index
      // console.log(1<<index)
      mask |= 1 << index;
    }
    skills.push(mask);
  }
  //console.log(skills)
  //
  const dp = Array(1 << n).fill(Number.MAX_SAFE_INTEGER);
  const saves = Array(1 << n).fill([]); // the member id that fufill skillset
  dp[0] = 0;
  for (let i = 0; i < people.length; i++) {
    const temp_dp = dp.slice();
    for (let skillset = 0; skillset < 1 << n; skillset++) {
      const new_skillset = skillset | skills[i];
      if (dp[new_skillset] > temp_dp[skillset] + 1) {
        dp[new_skillset] = Math.min(dp[new_skillset], temp_dp[skillset] + 1); // 上一轮能获得skillset 这一轮如果用这个人的skill，就能获得一个新的状态 new_skillset

        saves[new_skillset] = saves[skillset].slice();
        //  console.log('new_skillset',new_skillset,i)
        saves[new_skillset].push(i);
      }
    }
  }
  //  console.log(saves)
  return saves[(1 << n) - 1];
};
