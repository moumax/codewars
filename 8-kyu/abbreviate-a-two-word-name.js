const abbrevName = (name) => {
  const split = name.split(" ");
  const nickname = split[[0]].slice(0, 1).toUpperCase();
  const lastname = split[[1]].slice(0, 1).toUpperCase();
  return nickname + "." + lastname;
};
