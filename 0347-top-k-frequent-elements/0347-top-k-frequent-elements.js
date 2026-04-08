/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq={}
    for(val of nums){
        freq[val]=(freq[val]||0)+1
    }
  const sortedKeys = Object.keys(freq).sort((a, b) => freq[b] -freq[a])
 let result = sortedKeys.slice(0, k).map(Number)
 return result
};
