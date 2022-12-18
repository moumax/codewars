// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//
// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
//
// Examples:
//
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

const hello = (name) => {
    if (name == undefined || name == "") {
        return "Hello, World!";
    } else {
        const toto = name.toLowerCase();
        console.log(toto);
        const tata = toto.charAt(0).toUpperCase();
        console.log(tata);
        const titi = toto.slice(1);
        console.log(titi);
        return (name = `Hello, ${tata + titi}!`);
    }
};

// console.log(actualJohn, 'Hello, John!', "returns 'Hello, John!' when given 'johN'");

console.log(
    hello("aLice"),
    "Hello, Alice!",
    "returns 'Hello, Alice!' when given 'alice'"
);
console.log(
    hello(),
    "Hello, World!",
    "returns 'Hello, World!' when name is not given"
);
console.log(
    hello(""),
    "Hello, World!",
    "returns 'Hello, World!' when name is an empty string"
);
