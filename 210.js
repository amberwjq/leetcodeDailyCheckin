/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

//numCourses is V
// prerequisites.length is E

// Time Complexity: O(V+E).
// The outer for loop will be executed V number of times and the inner for loop will be executed E number of times.
// Auxillary Space: O(V).
// The queue needs to store all the vertices of the graph. So the space required is O(V)
var findOrder = function(numCourses, prerequisites) {
    const inDegree = Array(numCourses).fill(0); //inDegree 先 takes o（V）
    for(const pair of prerequisites) {
        inDegree[pair[0]]++;
    }// takes O(E)
    const queue = [];
    for(const [index,n] of inDegree.entries()) {
        if(n === 0) {
            queue.push(index);
        }
    } //take O(V)
    const res = [];
    while(queue.length) {
        const c = queue.shift();
        res.push(c);
        for(const pair of prerequisites) {
            if(pair[1] === c) {
                inDegree[pair[0]]--;
                if(inDegree[pair[0]]===0) {
                    queue.push(pair[0]);
                }
            }
        } 
    } //while loop 就是让所有的边小事
  //  console.log(res);
    return res.length === numCourses ? res: [];
    