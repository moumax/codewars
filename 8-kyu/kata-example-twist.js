// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.

var websites = [];
function add() {
  for (let i = 0; websites.length < 1000; i++) {
    if (websites.length != 1000) {
      websites.push("codewars");
    }
  }
}
add();
