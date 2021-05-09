module.exports = {
  name: 'machop',
  pokedex: 66,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'machop', level: 0, condition: false },
      {  evolutionStep: 2, form: 'machoke', level: 28, condition: false },
      {  evolutionStep: 3, form: 'machamp', level: false, condition: 'trade' },
    ]
  },
  regional_variant: { type: false },  
  stats: {
    hp: 70,
    atk: 80,
    def: 50,
    spAtk: 35,
    spDef: 35,
    spd: 35,
  },
  type: ['fighting'],
  catchRate: 23.5,
  experienceYield: 61,
  genderRatio: [{m: 75}, {f: 25}],
  evYield: [
    { type: 'atk', value: 1 }
  ],
  abilities: [
    {name: 'guts', hidden: false },
    {name: 'no guard', hidden: false },
    {name: 'steadfast', hidden: true }
  ],
  height: 0.8,
  weight: 19.5,
  moves: [
    { name: 'low kick', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'focus energy', level: 3 },
    { name: 'karate chop', level: 7 },
    { name: 'foresight', level: 9 },
    { name: 'low sweep', level: 13 },
    { name: 'seismic toss', level: 15 },
    { name: 'revenge', level: 19 },
    { name: 'knock off', level: 21 },
    { name: 'vital throw', level: 25 },
    { name: 'wake-up slap', level: 27 },
    { name: 'dual chop', level: 31 },
    { name: 'submission', level: 33 },
    { name: 'bulk up', level: 37 },
    { name: 'cross shop', level: 39 },
    { name: 'scary face', level: 43 },
    { name: 'dynamic punch', level: 45 },
  ],
  wild_items: {
    common: [],
    rare: ['focus_band'],
    guarantee: []
  }
};
