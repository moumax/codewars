// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  if (a <= 0 || b <= 0 || c <= 0) return false;
  let arr = [a, b, c];
  let newS = arr.sort((a, b) => b - a);
  a = newS[0];
  b = newS[1];
  c = newS[2];

  if (a < b + c) {
    return true;
  } else return false;
}
