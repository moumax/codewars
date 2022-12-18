// DESCRIPTION:
// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.
//
// Example:
//
// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

const filterLongWords = (sentence, n) => {
    return sentence.split(" ").filter((x) => x.length > n);
};

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4), [
    "quick",
    "brown",
    "jumps",
]);
