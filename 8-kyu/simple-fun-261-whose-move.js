function whoseMove(lastPlayer, win) {
    console.log(lastPlayer, win)
    if(lastPlayer === 'black' && win === false) return "white"
    if(lastPlayer === 'white' && win === true) return "white"
    else return "black"
  }