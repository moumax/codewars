// // input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// input = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
input = [];

const countPositivesSumNegatives = (input) => {
  const negative = () => {
    if (input == null || input == 0) {
      return [];
    } else {
      return input
        .filter((number) => number < 0)
        .reduce((num1, num2) => num1 + num2, 0);
    }
  };
  const positive = () => {
    if (input == null || input == 0) {
      return [];
    } else {
      return input.filter((number) => number > 0).length;
    }
  };
  let x = positive(input);
  let y = negative(input);
  if (x == 0 && y == 0) {
    return [];
  }
  return [x, y];
};
console.log(countPositivesSumNegatives(input));
