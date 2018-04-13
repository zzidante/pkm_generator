module.exports = {
  number: 5,
  name: 'mega punch',
  power: 80,
  accuracy: 85,
  rpgStats: {
    power: 'D8',
    accuracy: 'D17',
    statusEffect: false,
    multiHit: true,
  },
  specialEffects: [
    { description: 'Damage dealing normal-type move',
      modifier: false,
      originalDescription: 'Damage dealing normal-type move.',
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
  tm: 1,
  hm: false,
};
