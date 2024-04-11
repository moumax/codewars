function isValid(formula) {
  function verification(formula) {
    let condition1 = formula.includes(7) || formula.includes(8);
    let condition2 =
      (formula.includes(1) && !formula.includes(2)) ||
      (!formula.includes(1) && formula.includes(2)) ||
      (!formula.includes(1) && !formula.includes(2));
    let condition3 =
      (formula.includes(3) && !formula.includes(4)) ||
      (!formula.includes(3) && formula.includes(4)) ||
      (!formula.includes(3) && !formula.includes(4));
    let condition4 =
      (formula.includes(5) && formula.includes(6)) ||
      (!formula.includes(5) && !formula.includes(6));

    return condition1 && condition2 && condition3 && condition4;
  }
  return verification(formula);
}
