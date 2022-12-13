// Write a program that outputs the top n elements from a list.
//
// Example:
//
// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, xs) {
  // Find the n highest elements in a list
  const sorting = (a, b) => {
    return b - a;
  };
  const toto = (a, b) => {
    return a - b;
  };

  let arr = [];
  let sorted = xs.sort(sorting);
  for (let i = 0; i < n; i++) {
    arr.push(sorted[i]);
  }
  return arr.sort(toto);
}
