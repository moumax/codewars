function redistributeWealth(wealth) {
  console.log(wealth);
  console.log("length", wealth.length);
  let total = wealth.reduce((acc, curr) => acc + curr);
  console.log("total", total);

  for (let i = 0; i < wealth.length; i++) {
    console.log(wealth[i]);
    let len = wealth.length;

    wealth[i] = total / len;
  }

  void wealth;
}
