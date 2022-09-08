function derive(coefficient, exponent) {
  let product = coefficient * exponent;
  let deriv = exponent - 1;

  return `${product}x^${deriv}`;
}
