module.exports = {
  number: 6,
  name: 'pay day',
  power: 40,
  accuracy: 100,
  rpgStats: {
    power: 'D4',
    accuracy: 'D19',
    statusEffect: 'Each hit provides 5x\'s the user\'s level in coins',
    multiHit: false,
  },
  calculation: ( userLevel ) => { return { coins: userLevel * 5}; },
  specialEffects: [
    { description: 'Damage dealing normal-type move',
      modifier: false,
      originalDescription: 'Pay Day now scatters coins equal to five times the user\'s level each time. The player can now only pick up coins that were scattered by their Pokémon.',
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
  tm: 16,
  hm: false,
};
