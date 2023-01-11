// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    console.log(s)
    let arr = []
    let resEven = []
    let resOdd = []
    for(let char of s) {
      arr.push(char)
    }
    console.log(arr)
    
    for(let i = 0; i < arr.length; i++) {
      if(i % 2 == 0) {
        resEven.push(arr[i].toUpperCase())    
      } else resEven.push(arr[i])
    }
    for(let i = 0; i < arr.length; i++) {
      if(i % 2 != 0) {
        resOdd.push(arr[i].toUpperCase())    
      } else resOdd.push(arr[i])
    }
    
    let even = resEven.join("")
    let odd = resOdd.join("")
    return [even, odd]
  };