// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"

function battle(x, y) {
    let arr1 = x.split("")
    let arr2 = y.split("")
    let tab1 = []
    let tab2 = []
    console.log(arr1)
    for(letter of arr1) {
      tab1.push(letter.charCodeAt()-64)
    }
      for(letter of arr2) {
      tab2.push(letter.charCodeAt()-64)
    }
  
    let res1 = tab1.reduce((a,b)=>a+b)
    let res2 = tab2.reduce((a,b)=>a+b)
  
    if(res1 > res2) {
      return x
    }
    if(res1 < res2) {
      return y
    } else return "Tie!"
  }