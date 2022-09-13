// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  // Enlever les mauvais character de la chaine str
  let cleanedStr = str.replace(/[^a-zA-Z]+/g, "");
  // transformer str en arr
  let arr = cleanedStr.split("");
  console.log(arr);
  // reverser arr
  let reversed = arr.reverse();
  console.log(reversed);

  // transformer arr en str
  return reversed.join("");
}
