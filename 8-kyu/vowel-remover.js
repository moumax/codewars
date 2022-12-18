// DESCRIPTION:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
//
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(string) {
    //   console.log(string)
    let vowel = ["a", "e", "i", "o", "u"];
    let arr = string.split("");
    console.log(arr);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result = arr.filter((el) => !vowel.includes(el));
    }
    return result.join("");
}
