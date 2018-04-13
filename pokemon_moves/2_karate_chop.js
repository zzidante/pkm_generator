module.exports = {
  number: 2,
  name: 'karate chop',
  power: 50,
  accuracy: 100,
  rpgStats: {
    power: 'D4',
    accuracy: 'D19',
    statusEffect: false,
    multiHit: false,
  },
  specialEffects: [{ 
    description: 'increased critical hit X2',
    modifier: 2, 
    originalDescription: 'Increased critical hit ratio: 1/8 instead of 1/16' 
  }],
  type: 'fighting',
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
