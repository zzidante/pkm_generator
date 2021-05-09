module.exports = {
  name: 'golbat',
  pokedex: 42,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'zubat', level: 0, condition: false },
      {  evolutionStep: 2, form: 'golbat', level: 22, condition: 'fire stone' },
      {  evolutionStep: 3, form: 'crobat', level: false, condition: 'friendship' }, //
    ]
  },
  stats: {
    hp: 75,
    atk: 80,
    def: 70,
    spAtk: 65,
    spDef: 75,
    spd: 90,
  },
  type: ['poison', 'flying'],
  catchRate: 11.8,
  experienceYield: 159,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 2 }
  ],
  abilities: [
    {name: 'inner focus', hidden: false },
    {name: 'infiltrator', hidden: true }
  ],
  height: 1.6,
  weight: 55.0,
  moves: [
    { name: 'screech', level: 1 },
    { name: 'absorb', level: 1 },
    { name: 'supersonic', level: 1 },
    { name: 'astonish', level: 1 },
    { name: 'bite', level: 1 },
    { name: 'supersonic', level: 5 },
    { name: 'astonish', level: 7 },
    { name: 'bite', level: 11 },
    { name: 'wing attack', level: 13 },
    { name: 'confuse ray', level: 17 },
    { name: 'air cutter', level: 19 },
    { name: 'swift', level: 24 },
    { name: 'poison fang', level: 27 },
    { name: 'mean look', level: 32 },
    { name: 'leech life', level: 35 },
    { name: 'haze', level: 40 },
    { name: 'venoshock', level: 43 },
    { name: 'air slash', level: 48 },
    { name: 'quick guard', level: 51 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};
