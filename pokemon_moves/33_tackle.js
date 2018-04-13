const moves = {
  tackle: {
    power: 40,
    accuracy: 100,
    specialEffects: [],
    type: 'normal',
    category: 'physical',
    priority: 0,
    adjacentRules: {
      allAdjacent: false,
      allAdjacentFoes: false,
      all: false,
      allFoes: false,
      allAllies: false,
      targetOnly: true,
    },
    tm: false,
    hm: false,
  },
};

console.log(moves);