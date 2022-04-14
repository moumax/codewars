function isPalindrome(x) {
  let z = x.toLowerCase();
  let y = x.split("").reverse(" ").join("").toLowerCase();
  console.log(y);
  if (y == z) {
    return true;
  }
  if (y !== z) return false;
}
