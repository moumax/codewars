// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  let str1 = "";
  let str2 = "";
  let str3 = "";
  let string = numbers.join("");
  console.log("string", string);
  for (let i = 0; i < string.length; i++) {
    str1 = string[0] + string[1] + string[2];
    str2 = string[3] + string[4] + string[5];
    str3 = string[6] + string[7] + string[8] + string[9];
  }
  console.log(str1);
  console.log(str2);
  console.log(str3);
  let res = "(" + str1 + ")" + " " + str2 + "-" + str3;
  return res;
}
