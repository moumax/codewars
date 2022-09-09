function pipeFix(numbers) {
  let total = numbers.length;
  let first = numbers[0];
  let last = numbers[total - 1];
  console.log("last", last);
  let arr = [];
  for (let i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}
