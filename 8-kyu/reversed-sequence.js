const reverseSeq = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (n > 0) {
      result.push(n - 1 * i);
      result = result.filter((e) => e > 0);
    }
  }
  return result;
};
