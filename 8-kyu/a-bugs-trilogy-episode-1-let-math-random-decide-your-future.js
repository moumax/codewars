const yourFutureCareer = () => {
  let carreerCalculation = Math.random();
  console.log(carreerCalculation);
  if (carreerCalculation <= 0.32) {
    return "FrontEnd Developer";
  } else if (carreerCalculation <= 0.65) {
    return "BackEnd Developer";
  } else {
    return "Full-Stack Developer";
  }
};

yourFutureCareer();
