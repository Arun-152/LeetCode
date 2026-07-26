/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const single=grid.flat()
    let freq={},ans=[]
    for(val of single){
        freq[val]=(freq[val]||0)+1
    }
    for(key in freq){
         if(freq[key]>1){
            ans.push(Number(key))
        }
    }
    for(i=1;i<=single.length;i++){
        if(!single.includes(i)){
            ans.push(i)
        }
    }
    return ans
    
};