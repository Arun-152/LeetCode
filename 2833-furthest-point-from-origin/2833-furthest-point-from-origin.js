/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let x=0,y=0
    for(val of moves){
        if(val==="L"){
            x++
        }else if(val==="R"){
            x--
        }else if(val==="_"){
            y++
        }
    }
    return Math.abs(x)+y
    
};