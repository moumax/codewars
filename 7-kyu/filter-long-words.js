const filterLongWords = (sentence, n) => {
  return sentence.split(" ").filter((x) => x.length > n);
};

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4), [
  "quick",
  "brown",
  "jumps",
]);
