module.exports = {
  name: 'zubat',
  pokedex: 41,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'zubat', level: 0, condition: false },
      {  evolutionStep: 2, form: 'golbat', level: 22, condition: 'fire stone' },
      {  evolutionStep: 3, form: 'crobat', level: false, condition: 'friendship' },
    ]
  },
  stats: {
    hp: 40,
    atk: 45,
    def: 35,
    spAtk: 30,
    spDef: 40,
    spd: 55,
  },
  type: ['poison', 'flying'],
  catchRate: 33.3,
  experienceYield: 49,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 }
  ],
  abilities: [
    {name: 'inner focus', hidden: false },
    {name: 'infiltrator', hidden: true }
  ],
  height: 0.8,
  weight: 16.5,
  moves: [
    { name: 'absorb', level: 1 },
    { name: 'supersonic', level: 5 },
    { name: 'astonish', level: 7 },
    { name: 'bite', level: 11 },
    { name: 'wing attack', level: 13 },
    { name: 'confuse ray', level: 17 },
    { name: 'air cutter', level: 19 },
    { name: 'swift', level: 23 },
    { name: 'poison fang', level: 25 },
    { name: 'mean look', level: 29 },
    { name: 'leech life', level: 31 },
    { name: 'haze', level: 35 },
    { name: 'venoshock', level: 37 },
    { name: 'air slash', level: 41 },
    { name: 'quick guard', level: 43 },
  ],
};
