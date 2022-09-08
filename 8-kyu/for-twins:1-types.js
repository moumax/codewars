function typeValidation(variable, type) {
  let variableType = typeof variable;

  if (variableType == type) {
    return true;
  } else return false;
}
