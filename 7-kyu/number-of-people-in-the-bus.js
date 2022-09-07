var number = function (busStops) {
  console.log(busStops);
  let arr = 0;
  let result = [];
  for (let i = 0; i < busStops.length; i++) {
    let arr = busStops[i];
    result.push(arr.reduce((a, b) => a - b));
  }
  let total = result.reduce((a, b) => a + b);
  return total;
};
