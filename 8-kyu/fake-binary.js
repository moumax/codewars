// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let arr = x.split("");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > 4) newArr.push("1");
    else newArr.push("0");
  }
  return newArr.join("");
}
