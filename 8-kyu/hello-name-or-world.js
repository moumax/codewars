function hello(name) {
  if (name == name) {
    return name;
  } else return "Hello World!";
}

console.log(
  hello("alice"),
  "Hello, Alice!",
  "returns 'Hello, Alice!' when given 'alice'"
);
console.log(
  hello(),
  "Hello, World!",
  "returns 'Hello, World!' when name is not given"
);
console.log(
  hello(""),
  "Hello, World!",
  "returns 'Hello, World!' when name is an empty string"
);
