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
