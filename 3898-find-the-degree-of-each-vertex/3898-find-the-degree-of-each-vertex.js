/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let result=[]
    for(val of matrix){
        let sum=0
        for(num of val){
            sum+=num
        }
        result.push(sum)
    }
    return result
    
};