// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap(string) {
    const voy = "aeiou"
    return [...string].map((x) => [...voy].includes(x) ? x.toUpperCase() : x).join("")
}