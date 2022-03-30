const fuelPrice = (litres, pricePerLitre) => {
  if (litres < 2) {
    return pricePerLitre * litres;
  }
  if (litres >= 2 && litres < 4) {
    pricePerLitre = pricePerLitre - 0.05;
    const price = pricePerLitre * litres;
    return Math.round(price * 100) / 100;
  }
  if (litres >= 4 && litres < 6) {
    pricePerLitre = pricePerLitre - 0.1;
    const price = pricePerLitre * litres;
    return Math.round(price * 100) / 100;
  }
  if (litres >= 6 && litres < 8) {
    pricePerLitre = pricePerLitre - 0.15;
    const price = pricePerLitre * litres;
    return Math.round(price * 100) / 100;
  }
  if (litres >= 8 && litres < 10) {
    pricePerLitre = pricePerLitre - 0.2;
    const price = pricePerLitre * litres;
    return Math.round(price * 100) / 100;
  }
  if (litres >= 10) {
    pricePerLitre = pricePerLitre - 0.25;
    const price = pricePerLitre * litres;
    return Math.round(price * 100) / 100;
  }
};

console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.4);
console.log(fuelPrice(5, 5.6), 27.5);
console.log(fuelPrice(1, 1.23), 1.23);
