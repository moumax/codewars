input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function countPositivesSumNegatives(input) {
  const positive = input.filter((number) => number > 0);
  console.log(positive);
  console.log(positive.length);
  const count = [];
  count.push(positive.length);
  console.log(count[0]);

  let negative = input.filter((number) => number < 0);
  console.log(negative);

  let sum = 0;
  for (let i = 0; i < negative.length; i++) {
    sum += negative[i];
  }
  console.log(sum);

  //   var my_array = /* some array here */;
  //   var last_element = my_array[my_array.length - 1];

  return input[(count, sum)];
}

console.log(countPositivesSumNegatives(input));
