/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max=-Infinity

    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
          let d=(nums[i]-1)*(nums[j]-1)
          if(max<d){
            max=d
          }
        }
    }
    return max
    
};