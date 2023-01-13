// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let newArr = arr.sort((a,b) => a - b)
    console.log(newArr)
    for(let i = 0; i < newArr.length; i++) {
      if(newArr[0] === newArr[1]) {
        return newArr[newArr.length-1]
      } else return newArr[0]
    }
  }