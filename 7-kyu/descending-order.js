function descendingOrder(n) {
  //   console.log(n)
  let str = n.toString();
  let arr = str.split("");
  console.log(arr);
  let result = arr
    .sort((a, b) => a - b)
    .reverse()
    .join("");
  return parseInt(result);
}

console.log(descendingOrder(123456789), 987654321);
