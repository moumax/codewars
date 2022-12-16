// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.
//
// CONDITIONS
//
// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
// EXAMPLES
//
// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]
// //0 survivors                4 survivors
// //return true
//
//
// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false
//
// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]
// //1 survivors                3 survivors
// //return true

function hasSurvived(attackers, defenders) {
  console.log("attackers", attackers);
  console.log("defenders", defenders);
  let survivAtt = 0;
  let survivDef = 0;
  let powerAtt = attackers.reduce((a, b) => a + b, 0);
  let powerDef = defenders.reduce((a, b) => a + b, 0);

  console.log("powerAtt", powerAtt);
  console.log("powerDef", powerDef);

  for (let i = 0; i < attackers.length; i++) {
    if (attackers[i] > defenders[i]) {
      survivAtt++;
    }
    if (attackers[i] < defenders[i]) {
      survivDef++;
    }
  }
  console.log("survivantAtt", survivAtt);
  console.log("survivantDef", survivDef);
  if (survivAtt > survivDef) {
    return false;
  }
  if (survivAtt < survivDef) {
    return true;
  }
  if (survivAtt == survivDef && powerAtt > powerDef) {
    return false;
  }
  if (survivAtt == survivDef && powerAtt == powerDef) {
    return true;
  }
  if (survivAtt == survivDef && powerAtt < powerDef) {
    return true;
  }
}
