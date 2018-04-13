module.exports = {
  name: 'machoke',
  pokedex: 67,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'machop', level: 0, condition: false },
      {  evolutionStep: 2, form: 'machoke', level: 28, condition: false },
      {  evolutionStep: 3, form: 'machamp', level: false, condition: 'trade' },
    ]
  },
  regional_variant: { type: false },  
  stats: {
    hp: 80,
    atk: 100,
    def: 70,
    spAtk: 50,
    spDef: 60,
    spd: 45,
  },
  type: ['fighting'],
  catchRate: 11.5,
  experienceYield: 142,
  genderRatio: [{m: 75}, {f: 25}],
  evYield: [
    { type: 'atk', value: 2 }
  ],
  abilities: [
    {name: 'guts', hidden: false },
    {name: 'no guard', hidden: false },
    {name: 'steadfast', hidden: true }
  ],
  height: 1.5,
  weight: 70.5,
  moves: [
    { name: 'low kick', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'focus energy', level: 1 },
    { name: 'karate chop', level: 1 },
    { name: 'focus energy', level: 3 },
    { name: 'karate chop', level: 7 },
    { name: 'foresight', level: 9 },
    { name: 'low sweep', level: 13 },
    { name: 'seismic toss', level: 15 },
    { name: 'revenge', level: 19 },
    { name: 'knock off', level: 21 },
    { name: 'vital throw', level: 25 },
    { name: 'wake-up slap', level: 27 },
    { name: 'dual chop', level: 33 },
    { name: 'submission', level: 37 },
    { name: 'bulk up', level: 43 },
    { name: 'cross shop', level: 47 },
    { name: 'scary face', level: 53 },
    { name: 'dynamic punch', level: 57 },
  ],
};
