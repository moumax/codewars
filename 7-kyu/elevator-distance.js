function elevatorDistance(array) {
  let add = [];
  for (let i = 0; i < array.length - 1; i++) {
    add.push(array[i] - array[i + 1]);
  }
  return add.reduce((a, b) => Math.abs(a) + Math.abs(b));
}
