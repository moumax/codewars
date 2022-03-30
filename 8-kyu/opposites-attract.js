const lovefunc = (flower1, flower2) => {
  if (
    (flower1 === flower1 % 4 && flower2 !=== flower2 % 4) ||
    (flower2 === flower2 % 4 && flower1 !=== flower1 % 4)
  ) {
    return true;
  } else return false;
};

console.log(lovefunc(1, 4), true);
console.log(lovefunc(2, 2), false);
console.log(lovefunc(0, 1), true);
console.log(lovefunc(0, 0), false);
