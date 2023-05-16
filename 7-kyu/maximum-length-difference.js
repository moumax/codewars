// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
    const ar1 = []
    const ar2 = []
    let minA1 = 0
    let maxA1 = 0
    let minA2 = 0
    let maxA2 = 0
    if (a1.length === 0 || a2.length === 0) return -1

    for (let w of a1) {
        ar1.push(w.length)
        minA1 = Math.min(...ar1)
        maxA1 = Math.max(...ar1)
    }
    for (let w of a2) {
        ar2.push(w.length)
        minA2 = Math.min(...ar2)
        maxA2 = Math.max(...ar2)
    }

    let ecartA1 = maxA2 - minA1
    let ecartA2 = maxA1 - minA2

    return ecartA2 > ecartA1 ? ecartA2 : ecartA1
}