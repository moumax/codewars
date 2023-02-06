// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  let obj = {};
  const sorting = (a, b) => {
    a + b;
  };

  if (A.length === 1) return +A.join("");

  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  let sorted = Object.values(obj).sort(sorting);

  for (let j = 0; j < sorted.length; j++) {
    let key = sorted[j];
    if (key % 2 != 0) {
      return +Object.keys(obj)[j];
    }
  }

  return 0;
}
