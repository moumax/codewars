// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
// ["name2", 110, ["B", "A", "A", "A"]],
// ["name3", 200, ["B", "A", "A", "C"]],
// ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

// var array = [
// ["name1", 445, ["B", "A", "A", "C", "A", "A"]], // name1 total point is over 200 => hacked
// ["name2", 110, ["B", "A", "A", "A"]], //  name2 point is right
// ["name3", 200, ["B", "A", "A", "C"]], // name3 point is 200 but real point is 90 => hacked
// ,
// ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
// ];

// return ["name1", "name3"];

function findHack(arr) {
  let res = [];
  let countPoint = 0;
  let grade = true;
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i][0];
    const registeredPoints = arr[i][1];
    const scores = arr[i][2];

    countPoint = 0;
    grade = true;
    for (let score of scores) {
      if (score === "A") countPoint = countPoint + 30;
      if (score === "B") countPoint = countPoint + 20;
      if (score === "C") countPoint = countPoint + 10;
      if (score === "D") countPoint = countPoint + 5;
      if (score != "A" && score != "B") grade = false;
    }
    if (scores.length >= 5 && grade === true) {
      countPoint = countPoint + 20;
    }
    if (countPoint != registeredPoints) res.push(name);
  }
  return res;
}
