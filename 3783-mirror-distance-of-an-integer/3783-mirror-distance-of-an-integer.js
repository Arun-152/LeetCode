/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let result=0
    let str=n.toString().split("").reverse().join("")
    result=Math.abs(Number(str)-n)
    return result

};