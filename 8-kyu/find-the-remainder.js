const remainder = (n, m) => {
  if (n > m) {
    return n % m;
  }
  if (n < m) {
    return m % n;
  }
  if (n == 0 || m == 0) {
    return NaN;
  }
  if (n < 0 || m < 0) {
    return 0;
  }
};

console.log(
  remainder(17, 5),
  2,
  "Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5"
);
console.log(
  remainder(13, 72),
  remainder(72, 13),
  "The order the arguments are passed should not matter"
);
console.log(remainder(1, 0), "Divide by zero should return NaN");
console.log(remainder(0, 0), "Divide by zero should return NaN");
