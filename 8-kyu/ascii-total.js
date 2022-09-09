// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

function uniTotal(string) {
  let newArray = [];

  for (let i = 0; i < string.length; i++) {
    newArray.push(string.charCodeAt(i));
  }
  return newArray.reduce((a, b) => a + b, 0);
}
