// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
//
// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
//
// function solve(s){

 const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 const lower = "abcdefghijklmnopqrstuvwxyz"
 const numb = "1234567890"
 const speChar = "&(.^@-_?!<>%*\"\$:;'`=+\/)|~}{[],#\\"
 
 let tab = {
   countUpper : 0,
   countLower : 0,
   countNumb : 0,
   countSpeChar : 0,
 }
 let debug = []
 let split = s.split("")
 console.log("split: ",split)
 if(split == ""){
   return [tab.countUpper, tab.countLower, tab.countNumb, tab.countSpeChar]
 }
 for(let i = 0; i < split.length; i++) {
  for(let j = 0; j < speChar.length; j++) {
     if(split[i] == upper[j]) {
     tab.countUpper++
      debug.push(split[i])
   }
   if(split[i] == lower[j]) {
     tab.countLower++
     debug.push(split[i])
   }
   if(split[i] == numb[j]) {
     tab.countNumb++
     debug.push(split[i])
   }
   if(split[i] == speChar[j]) {
     tab.countSpeChar++
     debug.push(split[i])
   }
  }
 }
  console.log("debug:", debug)
 return [tab.countUpper, tab.countLower, tab.countNumb, tab.countSpeChar] 
 
}
