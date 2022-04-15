const remove = (string) => {
  const reduce = string.charAt(string.length - 1);
  if (reduce == "!") {
    return string.slice(0, -1);
  } else return string;
};
