const nameShuffler = (str) => {
  return str.split(" ").reverse().join(" ");
};

console.log(nameShuffler("john McClane"), "McClane john");
