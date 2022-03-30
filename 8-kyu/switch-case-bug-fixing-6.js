function evalObject(a, b) {
  var result = 0;
  switch (result) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "/":
      return a / b;
      break;
    case "*":
      return a * b;
      break;
    case "%":
      return a % b;
      break;
    case "^":
      return Math.pow(a, b);
      break;
  }
}

console.log(
  evalObject({ a: 1, b: 1, operation: "+" }),
  2,
  "Return the evaluated string as a number!"
);
console.log(
  evalObject({ a: 1, b: 1, operation: "-" }),
  0,
  "Return the evaluated string as a number!"
);
console.log(
  evalObject({ a: 1, b: 1, operation: "/" }),
  1,
  "Return the evaluated string as a number!"
);
console.log(
  evalObject({ a: 1, b: 1, operation: "*" }),
  1,
  "Return the evaluated string as a number!"
);
console.log(
  evalObject({ a: 1, b: 1, operation: "%" }),
  0,
  "Return the evaluated string as a number!"
);
console.log(
  evalObject({ a: 1, b: 1, operation: "^" }),
  1,
  "Return the evaluated string as a number!"
);
