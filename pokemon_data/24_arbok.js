module.exports = {
  name: 'arbok',
  pokedex: 24,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'ekans', level: 0, condition: false },
      {  evolutionStep: 2, form: 'arbok', level: 22, condition: false },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 60,
    atk: 85,
    def: 69,
    spAtk: 65,
    spDef: 79,
    spd: 80,
  },
  type: ['poison'],
  catchRate: 11.8,
  experienceYield: 157,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 2 }
  ],
  abilities: [
    {name: 'intimidate', hidden: false },
    {name: 'shed skin', hidden: false },
    {name: 'unnerve', hidden: true }
  ],
  height: 3.5,
  weight: 65.0,
  moves: [
    { name: 'crunch', level: -1 },
    { name: 'crunch', level: 1 },
    { name: 'ice fang', level: 1 },
    { name: 'thunder fang', level: 1 },
    { name: 'fire fang', level: 1 },
    { name: 'wrap', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'poison sting', level: 1 },
    { name: 'bite', level: 1 },
    { name: 'poison sting', level: 4 },
    { name: 'bite', level: 9 },
    { name: 'glare', level: 12 },
    { name: 'screech', level: 17 },
    { name: 'acid', level: 20 },
    { name: 'stockpile', level: 27 },
    { name: 'swallow', level: 27 },
    { name: 'spit up', level: 27 },
    { name: 'acid spray', level: 32 },
    { name: 'mud bomb', level: 39 },
    { name: 'gastro acid', level: 44 },
    { name: 'belch', level: 48 },
    { name: 'haze', level: 51 },
    { name: 'coil', level: 56 },
    { name: 'gunk shot', level: 63 },
  ],
  wild_items: {
    common: [],
    rare: ['poison_barb'],
    guarantee: []
  }
};
