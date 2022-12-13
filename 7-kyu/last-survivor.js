// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.
//
// Example:
//
// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

function lastSurvivor(letters, coords) {
  console.log("letter: ", letters);
  console.log("coords: ", coords);
  const lettersArr = letters.split("");
  console.log(lettersArr);
  const newArr = [];

  if (coords != []) {
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; (j = coords.length); j++) {
        lettersArr.splice(coords[i], 1);
        coords.shift();
        console.log("decrease coords :", coords.length);
        console.log("decrease letters arr: ", lettersArr.length);
      }
      return lettersArr.join();
    }
  }
  return letters;
}
