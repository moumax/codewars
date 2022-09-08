function divisibleBy(numbers, divisor) {
  let result = [];
  numbers.map((el) => {
    if (el % divisor == 0) {
      result.push(el);
    }
  });
  return result;
}
