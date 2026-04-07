/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let d=s.split("").sort().join("")
    let a=t.split("").sort().join("")
    if(d===a){
        return true
    }else{
    return false
    }
};