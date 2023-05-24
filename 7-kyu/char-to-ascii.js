// Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.

function charToAscii(string) {
    if (string.length === 0) return null

    let arr = [...string]
    let arrWduplicated = Array.from(new Set(arr)).join("")
    let stringCleaned = arrWduplicated.replace(/[^\w\s\n\r\t]/gi, '')
    let newArr = []
    stringCleaned = stringCleaned.replace(/ /g, "")

    for (let i = 0; i < stringCleaned.length; i++) {
        newArr.push(stringCleaned[i] + ":" + stringCleaned[i].charCodeAt())
    }

    const obj = {}

    for (let i = 0; i < newArr.length; i++) {
        const pair = newArr[i].split(':');
        const key = pair[0];
        const value = parseInt(pair[1]);

        obj[key] = value;
    }
    return obj
}