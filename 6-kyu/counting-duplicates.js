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
