// JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.

// You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.

// For example:

// typing(2);            //returns "number=2"
// typing(true);         //returns "boolean=true"
// typing("test");       //returns "string="test""
// typing([1,2,3]);      //returns "object=[1,2,3]"
// typing({a:1,b:2});    //returns "object={"a":1,"b":2}"
// typing(function(){}); //returns "function=function (){}"
// typing(undefined);    //returns "undefined"

function typing(param) {
  let type = typeof param;
  let value = param;
  console.log(value);

  if (type == "undefined") return "undefined";
  else if (type == "string") {
    return `${type}="${value}"`;
  } else if (type == "object" && Array.isArray(value) == false) {
    value = param;
    return `${type}={"${Object.keys(value)}":"${Object.values(value)}"}`;
  } else if (type == "object" && Array.isArray(value)) {
    return `${type}=[${value}]`;
  } else return `${type}=${value}`;
}
