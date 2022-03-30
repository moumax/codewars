const star = "*";
const padIt = (str, n) => {
  do {
    console.log(star + str);
    (star + str) * n;
  } while (n < n);
  return star + str;
};

console.log(padIt("a", 1), "*a");
console.log(padIt("a", 2), "*a*");
console.log(padIt("a", 3), "**a*");
console.log(padIt("a", 4), "**a**");
console.log(padIt("a", 5), "***a**");
