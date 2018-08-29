module.exports = pound;

const pound = {
  number: 1,
  name: 'pound',
  rpg_description: `To hit accuracy roll must be be above a ${this.rpgStats.accuracy}. Roll a ${this.rpgStats.power}. It gains stab on ${this.type} pokemon. It is a ${this.category} attack and hits ${this.adjacentRules.allAdjacentFoes}.`,
  power: 40,
  accuracy: 100,
  rpgStats: {
    power: 'D4',
    accuracy: 'D1',
    statusEffect: false,
    multiHit: false,
    target: function() { // probably have to look at bind for this?
      
    },
  },
  specialEffects: [],
  type: 'normal',
  category: 'physical',
  priority: 0,
  generation: 1,
  adjacentRules: {
    allAdjacent: false,
    allAdjacentFoes: true,
    all: false,
    allFoes: false,
    allAllies: false,
    targetOnly: true,
    canHitAnyOneAdjacent: false,
  },
  tm: false,
  hm: false,
};
