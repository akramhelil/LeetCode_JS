// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 6) --> [1,2]

function twoSum(arr, target) {
    const numsVisited = {};
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        // save the each 
        const num = arr[i];
        const complement = target - num; 

        if (numsVisited[complement] !== undefined) {
            res.push(i)
            // console.log(res)
            console.log(numsVisited)
            res.push(numsVisited[complement])
        }

        numsVisited[num] = i;
        console.log(numsVisited)
    }
    return res;
}

module.exports = twoSum;
