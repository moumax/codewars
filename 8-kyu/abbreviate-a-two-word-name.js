// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

const abbrevName = (name) => {
  const split = name.split(" ");
  const nickname = split[[0]].slice(0, 1).toUpperCase();
  const lastname = split[[1]].slice(0, 1).toUpperCase();
  return nickname + "." + lastname;
};
