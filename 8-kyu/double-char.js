const doubleChar = (str) => {
  return str
    .split("")
    .map((e) => e + e)
    .join("");
};
