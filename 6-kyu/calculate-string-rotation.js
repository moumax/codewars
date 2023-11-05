function shiftedDiff(first,second){
    if(first === second) return 0
    if(first.length != second.length) return -1

    let arr1 = [...first]
    let firstModified = []
    let counter = 0

    for(let i = 0; i < first.length; i++) {
      let char = arr1.pop()
      arr1.unshift(char)
      let firstModified = arr1.join("")
      if(firstModified != second) {
        counter++
      } else return counter + 1
    }
    return -1
  } 