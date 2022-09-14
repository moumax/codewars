// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array) {
  // mapper sur array pour sortir le code ascii de chaque lettre
  let ascii = array.map((el) => el.charCodeAt(0));
  let newArray = [];
  console.log(ascii);
  let end = ascii[ascii.length - 1];
  let result = [];

  // push les valeurs ascii du début jusqu'a la fin du tableau
  // la valeur manquante apparait dans le tableau
  for (let i = ascii[0]; i < end + 1; i++) {
    newArray.push(i);
  }
  console.log(newArray);

  // comparer les deux tableaux

  for (let j = 0; j < newArray.length; j++) {
    if (ascii[j] != newArray[j]) {
      result.push(newArray[j]);
    }
  }
  let final = result[0].toString();
  return String.fromCharCode(final);
}
