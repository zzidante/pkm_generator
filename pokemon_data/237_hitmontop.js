module.exports = {
  name: 'hitmontop',
  pokedex: 237,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'tyrogue', level: 0, condition: false },
      {  evolutionStep: 2, form: 'hitmontop', level: 20, condition: 'atk = def' },
    ]
  },
  variant: false,
  stats: {
    hp: 50,
    atk: 95,
    def: 95,
    spAtk: 35,
    spDef: 110,
    spd: 70,
  },
  type: ['fighting'],
  catchRate: 5.9,
  experienceYield: 159,
  genderRatio: [{m: 100}, {f: 0}],
  evYield: [
    { type: 'spDef', value: 2 },
  ],
  abilities: [
    {name: 'intimidate', hidden: false },
    {name: 'technician', hidden: false },
    {name: 'steadfast', hidden: true },
  ],
  height: 1.4,
  weight: 48.0,
  moves: [
    { name: 'rolling kick', level: -1 },
    { name: 'rolling kick', level: 1 },
    { name: 'endeavor', level: 1 },
    { name: 'close combat', level: 1 },
    { name: 'detect', level: 1 },
    { name: 'revenge', level: 1 },
    { name: 'focus energy', level: 1 },
    { name: 'pursuit', level: 1 },
    { name: 'quick attack', level: 1 },
    { name: 'focus energy', level: 6 },
    { name: 'pursuit', level: 10 },
    { name: 'quick attack', level: 15 },
    { name: 'rapid spin', level: 19 },
    { name: 'feint', level: 24 },
    { name: 'counter', level: 28 },
    { name: 'triple kick', level: 33 },
    { name: 'agility', level: 37 },
    { name: 'gyro ball', level: 42 },
    { name: 'wide guard', level: 46 },
    { name: 'quick guard', level: 46 },
    { name: 'detect', level: 50 },
    { name: 'close combat', level: 55 },
    { name: 'endeavor', level: 60 },
  ],
};