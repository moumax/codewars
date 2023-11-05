function reverseBits(n) {
  let bit = n.toString(2);
  console.log(bit);

  return parseInt([...bit].reverse().join(""), 2);
}
