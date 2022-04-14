const capitalizeWord = (word) => {
  const wordToCapitalize = word[0].toUpperCase();
  const slicedWord = word.slice(1);
  console.log(slicedWord);
  return wordToCapitalize + slicedWord;
};
