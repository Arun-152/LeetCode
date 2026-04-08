/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s===" ")return true
let a = "";
let removeChars = "!#$%:,.@_";
    
for (let val of s) {
    if (
        (val >= "a" && val <= "z") ||
        (val >= "A" && val <= "Z") ||
        (val >= "0" && val <= "9")
    ) {
        a += val.toLowerCase();
    }
}

let str = a.split("").reverse().join("");

return a===str
    
 
};