// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
    //   console.log(n)
    let str = n.toString();
    let arr = str.split("");
    console.log(arr);
    let result = arr
        .sort((a, b) => a - b)
        .reverse()
        .join("");
    return parseInt(result);
}

console.log(descendingOrder(123456789), 987654321);
