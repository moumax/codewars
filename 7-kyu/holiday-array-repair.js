// A colleague has been working on a program that returns the number of days of holiday that people in your coding company can take in the remainder of the year.

// The colleague’s program outputs the number of holidays each employee has left as an integer within an array. However, the program is not working properly. Alongside the element that specifies the number of holidays are several other useless elements. These other elements are of a variety of data types and none are integers.

// Your colleague boasts that he has more days of holiday left than you.

// Your Task
// Array1 contains one integer that specifies the number of days of holiday that your colleague has left. Array2 contains one integer with the number of days of holiday that you have left. Each of the two arrays will never contain more than a single integer.

// If your colleague is telling the truth, the function should return the string "Right". If your colleague is wrong, the function should return the string "Wrong". If you both have the same number of days of holiday, the function should return the string "same". If your colleague's program is beyond repair and does not produce an integer in either arrays, the function should return a string "Not possible".

function holidayCount(a1, a2) {
  let remainA1 = "";
  let remainA2 = "";
  console.log("a1: ", a1);
  console.log("a2: ", a2);

  for (let i = 0; i < a1.length; i++) {
    if (typeof a1[i] === "number" && a1[i] == a1[i]) {
      remainA1 = a1[i];
      console.log("remainA1: ", remainA1);
    }
  }
  for (let j = 0; j < a2.length; j++) {
    if (typeof a2[j] === "number" && a2[j] == a2[j]) {
      remainA2 = a2[j];
      console.log("remainA2: ", remainA2);
    }
  }

  if (remainA1 > remainA2) return "Right";
  else if (remainA1 == remainA2) return "Same";
  else if (remainA1 < remainA2 && remainA1 != 0 && remainA2 != 0)
    return "Wrong";
  else return "Not possible";
  console.log(remainA1);
  console.log(remainA2);
}
