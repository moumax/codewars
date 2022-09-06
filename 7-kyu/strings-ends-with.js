function solution(str, ending) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    for (let j = 0; j < ending.length; j++) {
      if (str[i] == ending[j]) {
        return true;
      } else return false;
    }
  }
}

console.log(solution("abcde", "cde"), true);
console.log(solution("abcde", "abc"), false);
