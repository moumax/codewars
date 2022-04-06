function turn(current, target) {
  if (current == "N") {
    if (target == "E") {
      return "right";
    } else return "left";
  }
  if (current == "S") {
    if (target == "E") {
      return "left";
    } else return "right";
  }
  if (current == "E") {
    if (target == "N") {
      return "left";
    } else return "right";
  }
  if (current == "W") {
    if (target == "N") {
      return "right";
    } else return "left";
  }
}
