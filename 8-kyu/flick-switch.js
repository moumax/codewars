function flickSwitch(arr) {
  let bool = true;
  let res = [];

  for (let word of arr) {
    if (word === "flick") {
      bool = !bool;
      res.push(bool);
    } else res.push(bool);
  }
  return res;
}
