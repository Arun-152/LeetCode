/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result=[],sum=0
    for(val of nums){
        sum+=val
        result.push(sum)
    }
    return result
};