function sort(sentence) {
  let arr = sentence.split(" ");
  let sentenceUp = [];
  let sentenceDown = [];

  for (let i = 0; i < arr.length; i++) {
    let firstLetter = arr[i][0];
    if (firstLetter === firstLetter.toUpperCase()) {
      sentenceUp.push(arr[i]);
    } else {
      sentenceDown.push(arr[i]);
    }
  }

  let sortedSentenceUp = sentenceUp.sort((a, b) => b.localeCompare(a));

  let sortedSentenceDown = sentenceDown.sort();
  let res = [...sortedSentenceDown, ...sortedSentenceUp];
  return res.join(" ").replace(/[^\w\s]/g, "");
}
