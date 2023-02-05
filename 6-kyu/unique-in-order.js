// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  let res = [];
  if (typeof iterable === "string") {
    let arr = iterable.split("");

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i + 1]) {
        res.push(arr[i]);
      } else console.log("osef");
    }
  } else {
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] != iterable[i + 1]) {
        res.push(iterable[i]);
      } else console.log("osef");
    }
  }
  return res;
};
