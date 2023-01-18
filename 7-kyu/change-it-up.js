// Create a function that takes a string as a parameter and does the following, in this order:

// Replaces every letter with the letter following it in the alphabet (see note below)
// Makes any vowels capital
// Makes any consonants lower case
// Note:

// the alphabet should wrap around, so Z becomes A
// in this kata, y isn't considered as a vowel.
// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

function changer(str) { 
    // Replaces every letter with the letter following it in the alphabet  
    let arr = []
    str = str.toLowerCase()
    arr = str.split('')
    let newArr = []
    
    for(let letter of arr) {
      if(letter == "z") {
        letter = "A"
      }
      if(letter.charCodeAt(letter) > 65) {
        letter = String.fromCharCode(letter.charCodeAt([letter]) + 1)
      }
        // Makes any vowels capital
        newArr.push(letter.toLowerCase().replace(/[aeiou]/g, function(l) {
          return l.toUpperCase()
        }))
    }
  
    return newArr.join("")
  }