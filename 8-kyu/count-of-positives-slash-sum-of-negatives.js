function countPositivesSumNegatives(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      return i++;
    }
  }
}

input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(input));
