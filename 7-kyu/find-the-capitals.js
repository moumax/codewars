// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	console.log(word)
  let arr = []
  
  for(let i = 0; i < word.length; i++) {
    if(word[i].charCodeAt() < 96) {
      arr.push(i)
    }
  }
  return arr
};