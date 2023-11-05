function neutralise(s1, s2) {
  let res = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === "+" && s2[i] === "+") res.push("+");
    if (s1[i] === "-" && s2[i] === "-") res.push("-");
    if (s1[i] != s2[i]) res.push("0");
  }
  return res.join("");
}
