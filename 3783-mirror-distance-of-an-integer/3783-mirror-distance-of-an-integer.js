/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {

    let str=n.toString().split("").reverse().join("")
    return Math.abs(Number(str)-n)
   

};