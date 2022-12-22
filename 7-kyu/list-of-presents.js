// Task:
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.
//
// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.
//
// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.
//
// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

function howManyGifts(maxBudget, gifts) {
  //   console.log("gifts" ,gifts)
  console.log("maxB", maxBudget);
  let arr = [];

  let res = gifts.reduce((a, b) => a + b);
  console.log("res", res);

  const sorting = (a, b) => {
    return a - b;
  };
  gifts.sort(sorting);
  console.log("SortedGifts", gifts);

  if (maxBudget == 0) {
    return 0;
  }
  if (res == 0) {
    return gifts.length;
  }

  for (let el of gifts) {
    arr.push(el);
    let result = arr.reduce((a, b) => a + b, 0);
    //     console.log("arr",arr)
    console.log("result", result);
    if (result > maxBudget) {
      return arr.length - 1;
    }
    if (result == maxBudget) {
      return arr.length;
    }
  }
}
