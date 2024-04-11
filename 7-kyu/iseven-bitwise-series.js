var isEven = function (n) {
  const str = n.toString();
  const last = str.charAt(str.length - 1);

  if (
    last === "0" ||
    last === "2" ||
    last === "4" ||
    last === "6" ||
    last === "8"
  ) {
    return true;
  } else return false;
};
