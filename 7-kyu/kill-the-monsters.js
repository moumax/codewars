const killMonsters = (health, monsters, damage) => {
  for (let i = 0; i < monsters.length; i--) {
    console.log(health - damage);

    if (health <= 0) {
      return "hero died";
    } else {
      continue;
    }
  }
};

killMonsters(50, 7, 10);
killMonsters(20, 1, 10);
