const hello = (name) => {
  if (hello === undefined) {
    return "Hello, World !";
  } else {
    const low = name.toLowerCase();
    return "Hello, " + low.charAt(0).toUpperCase() + low.slice(1) + "!";
  }
};

console.log(
  hello("aLice"),
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
