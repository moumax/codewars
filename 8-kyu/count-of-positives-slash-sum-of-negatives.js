// Given an array of integers.
//
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
// If the input is an empty array or is null, return an empty array.
//
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

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
