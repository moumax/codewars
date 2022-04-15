const stringy = (size) => {
  const ten = "10";

  let result = ten.repeat(size / 2);

  if (size % 2 == 0) {
    return result;
  } else {
    return result + ten.charAt(0);
  }
};
