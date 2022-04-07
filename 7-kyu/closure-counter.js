function counter() {
  let num = 1;
  function numCounter() {
    return num++;
  }
  return numCounter;
}
