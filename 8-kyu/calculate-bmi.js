// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let calculateBmi = weight / (height * height);
  console.log(calculateBmi);

  if (calculateBmi <= 18.5) {
    return "Underweight";
  }

  if (calculateBmi <= 25.0) {
    return "Normal";
  }

  if (calculateBmi <= 30.0) {
    return "Overweight";
  }

  if (calculateBmi > 30) {
    return "Obese";
  }
}
