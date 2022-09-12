// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

var flatten = function (array) {
  return array.reduce((acc, val) => acc.concat(val), []);
};
