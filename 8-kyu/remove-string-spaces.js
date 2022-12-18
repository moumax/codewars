// Simple, remove the spaces from the string, then return the resultant string.

const noSpace = (x) => {
    const toto = x.split("");
    console.log(toto);
    const tata = toto.filter((letter) => letter != " ");
    return tata.join("");
};
