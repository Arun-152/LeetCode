/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {

    let result = [];
    let min = Infinity;

    for (let i = 0; i < cost.length; i++) {
        min = Math.min(min, cost[i]);
        result.push(min);
    }

    return result;

    
};