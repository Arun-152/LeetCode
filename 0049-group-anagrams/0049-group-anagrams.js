/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let freq={},result=[]
    for(i=0;i<strs.length;i++){
        let d=strs[i].split("").sort()
        if(freq.hasOwnProperty(d.join(""))){
         freq[d.join("")].push(strs[i])
        }else{
            freq[d.join("")]=[strs[i]]
        }
        
    }
    for(val in freq){
        result.push(freq[val])
    }
    return result
    
};