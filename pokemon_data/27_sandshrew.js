// import alolan sandshrew

module.exports = {
  name: 'sandshrew',
  pokedex: 27,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'sandshrew', level: 0, condition: false },
      {  evolutionStep: 2, form: 'sandslash', level: 22, condition: false },
    ]
  },
  regional_variant: { type: 'alolan' }, // reference alolan sandshrew here
  stats: {
    hp: 50,
    atk: 75,
    def: 85,
    spAtk: 20,
    spDef: 30,
    spd: 40,
  },
  type: ['ground'],
  catchRate: 33.3,
  experienceYield: 60,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 1 }
  ],
  abilities: [
    {name: 'sand veil', hidden: false },
    {name: 'sand rush', hidden: true }
  ],
  height: 0.6,
  weight: 12.0,
  moves: [
    { name: 'scratch', level: 1 },
    { name: 'defense curl', level: 1 },
    { name: 'sand attack', level: 3 },
    { name: 'poison sting', level: 5 },
    { name: 'rollout', level: 7 },
    { name: 'rapid spin', level: 9 },
    { name: 'fury cutter', level: 11 },
    { name: 'magnitude', level: 14 },
    { name: 'swift', level: 17 },
    { name: 'fury swipes', level: 20 },
    { name: 'sand tomb', level: 23 },
    { name: 'slash', level: 26 },
    { name: 'dig', level: 30 },
    { name: 'gyro ball', level: 34 },
    { name: 'swords dance', level: 38 },
    { name: 'sandstorm', level: 42 },
    { name: 'earthquake', level: 46 },
  ],
};
