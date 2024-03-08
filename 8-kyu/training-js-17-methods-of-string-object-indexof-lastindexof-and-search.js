function firstToLast(str, c) {

  let exist = str.search(c)
  console.log("exist", exist)

  let firstIndex = str.indexOf(c)
  console.log("first", firstIndex)

  let lastIndex = str.lastIndexOf(c)
  console.log("last", lastIndex)

  if (exist == -1) return -1
  if (lastIndex == -1) return firstIndex

  return lastIndex - firstIndex

}
