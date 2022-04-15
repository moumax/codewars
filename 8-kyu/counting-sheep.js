const countSheeps = (arrayOfSheep) => {
  const result = arrayOfSheep.filter((sheep) => sheep == true);
  return result.length;
};
