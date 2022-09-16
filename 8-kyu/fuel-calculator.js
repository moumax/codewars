// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

const fuelPrice = (litres, pricePerLitre) => {
  for (let i = 0; i < litres; i++)
    if (litres < 2) {
      pricePerLitre * litres;
    }
  if (litres >= 2 && litres < 4) {
    pricePerLitre = pricePerLitre - 0.05;
  }
  if (litres >= 4 && litres < 6) {
    pricePerLitre = pricePerLitre - 0.1;
  }
  if (litres >= 6 && litres < 8) {
    pricePerLitre = pricePerLitre - 0.15;
  }
  if (litres >= 8 && litres < 10) {
    pricePerLitre = pricePerLitre - 0.2;
  }
  if (litres >= 10) {
    pricePerLitre = pricePerLitre - 0.25;
  }

  return Math.round(litres * pricePerLitre * 100) / 100;
};

console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.4);
console.log(fuelPrice(5, 5.6), 27.5);
console.log(fuelPrice(1, 1.23), 1.23);
