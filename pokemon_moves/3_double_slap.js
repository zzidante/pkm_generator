module.exports = {
  number: 3,
  name: 'double slap',
  power: 10,
  accuracy: 85,
  rpgStats: {
    power: 'D2',
    accuracy: 'D17',
    statusEffect: false,
    multiHit: true,
  },
  specialEffects: [
    { description: 'Roll a D6. Hits 2-5 times: 1&2 = 2 times, 3&4 = 3 times, 5 = 4 times, 6 = 5 times',
      modifier: false,
      originalDescription: '~33.3% chance that Double Slap will hit 2 times, a ~33.3% chance it will hit 3 times, a ~16.7% chance it will hit 4 times, and a ~16.7% chance it will hit 5 times. Provided that the move does not miss, it will hit ~3.167 times on average, giving it an average power of 47.5.',
    }
  ],
  type: 'normal',
  category: 'physical',
  priority: 0,
  generation: 1,
  adjacentRules: {
    allAdjacent: false,
    allAdjacentFoes: false,
    all: false,
    allFoes: false,
    allAllies: false,
    targetOnly: true,
    canHitAnyOneAdjacent: true,
  },
  tm: false,
  hm: false,
};
