function fuelPrice(litres, pricePerLitre) {
  if (litres >= 2) {
    let discount = 0.05 * litres;
    //discount total = 0.25
    pricePerLitre = pricePerLitre - discount;
    return litres * pricePerLitre;
  }
  if (litres >= 4) {
    return (pricePerLitre = (pricePerLitre - 0.1) * litres);
  }
  if (litres >= 6) {
    return (pricePerLitre = (pricePerLitre - 0.15) * litres);
  }
  if (litres >= 8) {
    return (pricePerLitre = (pricePerLitre - 0.2) * litres);
  }
  if (litres >= 10) {
    return (pricePerLitre = (pricePerLitre - 0.25) * litres);
  }
}

console.log(fuelPrice(5, 1.23), 5.65);
6.15; // 0.05 * 5 = 0.25 //
console.log(fuelPrice(8, 2.5), 18.4);
console.log(fuelPrice(5, 5.6), 27.5);
