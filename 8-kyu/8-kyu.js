//! Rock Paper Scissors! (https://www.codewars.com/kata/5672a98bdbdd995fad00000f)
const rps = (p1, p2) => {
  console.log(p1, p2);
  if (
    (p1 == "scissors" && p2 == "paper") ||
    (p1 == "rock" && p2 == "scissors") ||
    (p1 == "paper" && p2 == "rock")
  ) {
    return "Player 1 won!";
  }
  if (
    (p1 == "scissors" && p2 == "rock") ||
    (p1 == "paper" && p2 == "scissors") ||
    (p1 == "rock" && p2 == "paper")
  ) {
    return "Player 2 won!";
  } else {
    return "Draw!";
  }
};
