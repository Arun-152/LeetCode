/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let obj = {},str="", string = {
        z: 0,
        y: 1,
        x: 2,
        w: 3,
        v: 4,
        u: 5,
        t: 6,
        s: 7,
        r: 8,
        q: 9,
        p: 10,
        o: 11,
        n: 12,
        m: 13,
        l: 14,
        k: 15,
        j: 16,
        i: 17,
        h: 18,
        g: 19,
        f: 20,
        e: 21,
        d: 22,
        c: 23,
        b: 24,
        a: 25
    };
    for (val of weights) {
        for (let i = 0; i < weights.length; i++) {
            let letter = String.fromCharCode(97 + i);
            obj[letter] = weights[i]
        }
    }
    for (i = 0; i < words.length; i++) {
        let ch = words[i], sum = 0
        for (j = 0; j < ch.length; j++) {
            sum += obj[ch[j]]
        }
        let number = Math.abs(sum % 26)
        console.log(sum)

        str+=Object.keys(string).find(k => string[k] === number)
    }
    return str

};