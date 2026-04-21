/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let arr=[]
    for(i=0;i<s.length;i++){
        if(i<k){
           arr.unshift(s[i])
        }else{
            arr.push(s[i])
        }
    }
    return arr.join("")
};