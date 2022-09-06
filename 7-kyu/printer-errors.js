function printerError(s) {
  let printerError = 0;
  let printerLength = s.length;
  console.log("length: ", printerLength);

  let stringRefused = "nopqrstuvwxyz";

  for (let i = 0; i < printerLength; i++) {
    let letters = s[i];
    console.log(letters);
    for (let j = 0; j < stringRefused.length; j++) {
      if (letters == stringRefused[j]) {
        printerError++;
      }
    }
  }
  return `${printerError}/${printerLength}`;
}

var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s), "3/56");
