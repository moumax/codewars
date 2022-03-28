const getAge = (inputString) => {
  if (isNaN(inputString[0])) {
    return "not a number";
  } else return parseInt(inputString[0]);
};

console.log(getAge("4 years old"), 4);
