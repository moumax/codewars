function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = [];

  for (let i = 0; i < geese.length; i++) {
    result = birds.filter((e) => !geese.includes(e));
  }

  return result;
}
