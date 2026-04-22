/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let str=""
    let index=word.indexOf(ch)
    for(i=index;i>=0;i--){
       str+=word[i]
    }
    for(i=index+1;i<word.length;i++){
        str+=word[i]
    }
    return str

};