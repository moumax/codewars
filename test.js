const str = "100.100.100.255";

if (str.match(/^([0-9.]){7,15}$/)) {
  console.log("str correct !");
} else console.log("str incorrect ;-(");
