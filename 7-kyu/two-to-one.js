// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const s3 = s1.concat(s2);
    console.log(s3);
    const sorted = s3.split("").sort();
    console.log(sorted);
    const filteredArray = sorted.filter((ele, pos) => sorted.indexOf(ele) == pos);
    return filteredArray.join("");
}
