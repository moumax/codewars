function twoHighest(arr) {
    let res = []
    if(arr.length === 0) return []
    if(arr.length === 1) return arr
    arr = arr.sort((a,b) => b - a)
    let x = [...new Set(arr)]
    console.log(x)
    res.push(x[0], x[1])
    return res
  }