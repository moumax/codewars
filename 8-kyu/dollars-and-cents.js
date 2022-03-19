function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

console.log(formatMoney(3.1));

console.log(
  formatMoney(39.99),
  "$39.99",
  "That's not formatted the way we expected."
);
