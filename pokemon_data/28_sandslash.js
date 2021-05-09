// import alolan sandslash

module.exports = {
  name: 'sandslash',
  pokedex: 28,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'sandshrew', level: 0, condition: false },
      {  evolutionStep: 2, form: 'sandslash', level: 22, condition: false },
    ]
  },
  regional_variant: { type: 'alolan' }, // reference alolan sandslash here
  stats: {
    hp: 75,
    atk: 100,
    def: 110,
    spAtk: 45,
    spDef: 55,
    spd: 65,
  },
  type: ['ground'],
  catchRate: 11.8,
  experienceYield: 158,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 2 }
  ],
  abilities: [
    {name: 'sand veil', hidden: false },
    {name: 'sand rush', hidden: true }
  ],
  height: 1.0,
  weight: 29.5,
  moves: [
    { name: 'scratch', level: 1 },
    { name: 'crush claw', level: 1 },
    { name: 'defence curl', level: 1 },
    { name: 'sand attack', level: 1 },
    { name: 'poison sting', level: 1 },
    { name: 'crush claw', level: -1 },
    { name: 'sand attack', level: 3 },
    { name: 'poison sting', level: 5 },
    { name: 'rollout', level: 7 },
    { name: 'rapid spin', level: 9 },
    { name: 'fury cutter', level: 11 },
    { name: 'magnitude', level: 14 },
    { name: 'swift', level: 17 },
    { name: 'fury swipes', level: 20 },
    { name: 'sand tomb', level: 24 },
    { name: 'slash', level: 28 },
    { name: 'dig', level: 33 },
    { name: 'gyro ball', level: 38 },
    { name: 'swords dance', level: 43 },
    { name: 'sandstorm', level: 48 },
    { name: 'earthquake', level: 53 },
  ],
  wild_items: {
    common: [],
    rare: ['quick_claw', 'grip_claw', 'soft_sand'],
    guarantee: []
  }
};
