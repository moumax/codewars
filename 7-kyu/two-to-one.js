function longest(s1, s2) {
  const s3 = s1.concat(s2);
  console.log(s3);
  const sorted = s3.split("").sort();
  console.log(sorted);
  const filteredArray = sorted.filter((ele, pos) => sorted.indexOf(ele) == pos);
  return filteredArray.join("");
}
