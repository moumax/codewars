// Aliens send messages to our planet, but they use a very strange language. Try to decode the messages!

function decode(m) {
  console.log(m);
  let clean = m.replace(/[{.+\[\]}']+/g, " ");

  let arr = clean.split(" ").reverse();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "|-|") arr[i] = "h";
    if (arr[i] == "-") arr[i] = "e";
    if (arr[i] == "|_") arr[i] = "l";
    if (arr[i] == "()") arr[i] = "o";
    if (arr[i] == "3") arr[i] = "b";
    if (arr[i] == "|^") arr[i] = "p";
    if (arr[i] == "|") arr[i] = "i";
    if (arr[i] == "|)") arr[i] = "d";
    if (arr[i] == "_\\~") arr[i] = "s";
    if (arr[i] == "~|~") arr[i] = "t";
    if (arr[i] == "|_|") arr[i] = "u";
    if (arr[i] == "`/") arr[i] = "y";
    if (arr[i] == "/?") arr[i] = "r";
    if (arr[i] == "/\\") arr[i] = "a";
    if (arr[i] == "|\\|") arr[i] = "n";
    if (arr[i] == "/<") arr[i] = "k";
    if (arr[i] == "(") arr[i] = "c";
    if (arr[i] == "__") arr[i] = " ";
    if (arr[i] == "/=") arr[i] = "f";
    if (arr[i] == "(_") arr[i] = "g";
    if (arr[i] == "|\\/|") arr[i] = "m";
    if (arr[i] == "><") arr[i] = "x";
    if (arr[i] == "\\/\\/") arr[i] = "w";
    if (arr[i] == "()_") arr[i] = "q";
    if (arr[i] == "~/_") arr[i] = "z";
    if (arr[i] == "\\/") arr[i] = "v";
    if (arr[i] == "_T") arr[i] = "j";
    if (arr[i] == "(_,") arr[i] = "g";
  }

  return arr.join("");
}
