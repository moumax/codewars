function filter_list(l) {
  console.log(l);
  for (let i = 0; i < l.length; i++) {
    if (l[i] == typeof Number) {
      console.log(l[i]);
    } else console.log(typeof l[i]);
  }
}

console.log(filter_list([1, 2, "a", "b"]), [1, 2]);
console.log(filter_list([1, "a", "b", 0, 15]), [1, 0, 15]);
console.log(filter_list([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);
