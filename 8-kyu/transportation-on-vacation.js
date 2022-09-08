function rentalCarCost(d) {
  let cost = 40;

  if (d < 3) return cost * d;
  if (d >= 3 && d < 7) return cost * d - 20;
  if (d >= 7) return cost * d - 50;
}
