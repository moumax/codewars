const mergeArrays = (arr1, arr2) => {
  const arr3 = arr1.concat(arr1, arr2);
  const classm = [...new Set(arr3)];
  classm.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return classm;
};

console.log(
  mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]),
  [1, 2, 3, 4, 5, 6, 7, 8],
  "Basic tests"
);
console.log(
  mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "Basic tests"
);
// console.log(
//   mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]),
//   [1, 2, 3, 4, 5, 7, 9, 10, 11, 12],
//   "Basic tests"
// );
