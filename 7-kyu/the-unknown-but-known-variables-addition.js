// This should be fairly simple. It is more of a puzzle than a programming problem.

// There will be a string input in this format: 'a+b' 2 lower case letters (a-z) seperated by a '+'

// Return the sum of the two variables.

// There is one correct answer for a pair of variables.

// I know the answers, it is your task to find out.

// Once you crack the code for one or two of the pairs, you will have the answer for the rest.

// It is like when you were in school doing math and you saw "11 = c+h" and you needed to find out what c and h were.

// However you don't have an 11. You have an unknown there as well. Example:

// X = a+b.

// You don't know what X is, and you don't know what b is or a, but it is a puzzle and you will find out.

// As part of this puzzle, there is three hints or clues on solving this. I won't tell you what the other two are, but one of them is: Don't overthink it. It is a simple solution

// Given the input as a string - Return the sum of the two variables as int.

function theVar(theVariables) {
  let first = 0;
  let second = 0;

  let arr = theVariables.split("");
  let res = [];
  console.log(arr);
  for (let letter of arr) {
    if (letter == "a") {
      res.push(1);
    }
    if (letter == "b") {
      res.push(2);
    }
    if (letter == "c") {
      res.push(3);
    }
    if (letter == "d") {
      res.push(4);
    }
    if (letter == "e") {
      res.push(5);
    }
    if (letter == "f") {
      res.push(6);
    }
    if (letter == "g") {
      res.push(7);
    }
    if (letter == "h") {
      res.push(8);
    }
    if (letter == "i") {
      res.push(9);
    }
    if (letter == "j") {
      res.push(10);
    }
    if (letter == "k") {
      res.push(11);
    }
    if (letter == "l") {
      res.push(12);
    }
    if (letter == "m") {
      res.push(13);
    }
    if (letter == "n") {
      res.push(14);
    }
    if (letter == "o") {
      res.push(15);
    }
    if (letter == "p") {
      res.push(16);
    }
    if (letter == "q") {
      res.push(17);
    }
    if (letter == "r") {
      res.push(18);
    }
    if (letter == "s") {
      res.push(19);
    }
    if (letter == "t") {
      res.push(20);
    }
    if (letter == "u") {
      res.push(21);
    }
    if (letter == "v") {
      res.push(22);
    }
    if (letter == "w") {
      res.push(23);
    }
    if (letter == "x") {
      res.push(24);
    }
    if (letter == "y") {
      res.push(25);
    }
    if (letter == "z") {
      res.push(26);
    }
  }
  return res.reduce((a, b) => a + b);
}
