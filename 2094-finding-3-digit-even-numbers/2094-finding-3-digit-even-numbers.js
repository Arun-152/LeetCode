/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  let ans = [];
    let set = new Set();

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 0) continue;
        for (let j = 0; j < digits.length; j++) {
            if (i === j) continue;

            for (let k = 0; k < digits.length; k++) {
                if (k === i || k === j) continue;

                let num = digits[i] * 100 + digits[j] * 10 + digits[k];

                if (num % 2 === 0 && !set.has(num)) {
                    set.add(num);
                    ans.push(num);
                }
            }
        }
    }

    ans.sort((a, b) => a - b);

    return ans;
};