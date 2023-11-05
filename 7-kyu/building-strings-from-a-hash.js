function solution(pairs) {
  console.log(pairs);
  let res = [];

  for (pair in pairs) {
    let key = pair;
    let values = pairs[pair];
    res.push(`${key} = ${values}`);
  }
  return res.join();
}
