/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    return Math.abs((n.toString().split("").reverse().join(""))-n)
};