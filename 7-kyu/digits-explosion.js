// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

function explode(s) {
    let arr = s.split("")
    let res = []
    for(let num of arr) {
      switch(true) {
          case(num == 1) :
            res.push(1)
          break
          case(num == 2) :
            res.push(22)
          break
            case(num == 3) :
            res.push(333)
          break
                    case(num == 4) :
            res.push(4444)
          break
                    case(num == 5) :
            res.push(55555)
          break
                    case(num == 6) :
            res.push(666666)
          break
                    case(num == 7) :
            res.push(7777777)
          break
                    case(num == 8) :
            res.push(88888888)
          break
                    case(num == 9) :
            res.push(999999999)
          break
      }
    }  
    return res.join("")
  }