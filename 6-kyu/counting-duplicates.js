// DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(str) {
    let lower = str.toLowerCase();
    console.log(lower);
    let result = {};
    let final = 0;
    // on crée un objet en introduisant le clé et la valeur de chaque clé
    for (let i = 0; i < lower.length; i++) {
        const char = lower[i];
        if (char in result) {
            result[char] += 1;
        } else {
            result[char] = 1;
        }
    }
    let count = Object.values(result);
    let compteur = 0;
    console.log(count);
    count.forEach((el) => {
        if (el > 1) {
            compteur++;
        }
    });
    console.log("compteur: ", compteur);
    if (compteur == 0) return 0;
    if (compteur == 1) return 1;
    if (compteur > 1) return compteur;
}
