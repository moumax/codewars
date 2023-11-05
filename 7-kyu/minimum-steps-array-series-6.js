function minimumSteps(numbers, value) {
  let numbersClassment = numbers.sort((a, b) => a - b);
  let res = 0;
  let count = -1;
  for (let i = 0; i < numbersClassment.length; i++) {
    if (res < value) {
      res = res + numbersClassment[i];
      count++;
    } else return count;
  }
  return count;
}
