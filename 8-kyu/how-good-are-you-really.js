const betterThanAverage = (classPoints, yourPoints) => {
  const newClassPoints = classPoints.push(yourPoints);
  const classPointsAverage =
    classPoints.reduce((acc, currentValue) => acc + currentValue) /
    classPoints.length;
  return yourPoints > classPointsAverage ? true : false;
};
