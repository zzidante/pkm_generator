module.exports = {
  name: 'ekans',
  pokedex: 23,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'ekans', level: 0, condition: false },
      {  evolutionStep: 2, form: 'arbok', level: 22, condition: false },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 35,
    atk: 60,
    def: 44,
    spAtk: 40,
    spDef: 54,
    spd: 55,
  },
  type: ['poison'],
  catchRate: 33.3,
  experienceYield: 58,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 1 }
  ],
  abilities: [
    {name: 'intimidate', hidden: false },
    {name: 'shed skin', hidden: false },
    {name: 'unnerve', hidden: true }
  ],
  height: 2.0,
  weight: 6.9,
  moves: [
    { name: 'wrap', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'poison sting', level: 4 },
    { name: 'bite', level: 9 },
    { name: 'glare', level: 12 },
    { name: 'screech', level: 17 },
    { name: 'acid', level: 20 },
    { name: 'stockpile', level: 25 },
    { name: 'swallow', level: 25 },
    { name: 'spit up', level: 25 },
    { name: 'acid spray', level: 28 },
    { name: 'mud bomb', level: 33 },
    { name: 'gastro acid', level: 36 },
    { name: 'belch', level: 38 },
    { name: 'haze', level: 41 },
    { name: 'coil', level: 44 },
    { name: 'gunk shot', level: 49 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};
