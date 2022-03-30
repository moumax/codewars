const well = (x) => {
  for (const i of x) {
    if (i == "bad") {
      return "Fail!";
    }
    if (i == "good" || i > 2) {
      return "I smell a series!";
    }
  }
};

console.log(well(["bad", "bad", "bad"]), "Fail!");
console.log(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),
  "I smell a series!"
);
