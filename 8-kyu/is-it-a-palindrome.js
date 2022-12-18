// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let z = x.toLowerCase();
    let y = x.split("").reverse(" ").join("").toLowerCase();
    console.log(y);
    if (y == z) {
        return true;
    }
    if (y !== z) return false;
}
