module.exports = {
  name: 'magneton',
  pokedex: 82,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'magnemite', level: 0, condition: false },
      {  evolutionStep: 2, form: 'magneton', level: 30, condition: 'fire stone' },
      {  evolutionStep: 2, form: 'magnezone', level: true, condition: ['magnetic field'] },
    ]
  },
  variant: { type: false },  
  stats: {
    hp: 50,
    atk: 60,
    def: 95,
    spAtk: 120,
    spDef: 70,
    spd: 70,
  },
  type: ['electric', 'steel'],
  catchRate: 7.8,
  experienceYield: 163,
  genderRatio: [false],
  evYield: [
    { type: 'spatk', value: 2 }
  ],
  abilities: [
    {name: 'magnet pull', hidden: false },
    {name: 'sturdy', hidden: false },
    {name: 'analytic', hidden: true }
  ],
  height: 1.0,
  weight: 60.0,
  moves: [
    { name: 'tri attack', level: -1 },
    { name: 'electric terrain', level: 1 },
    { name: 'supersonic', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'thunder shock', level: 1 },
    { name: 'magnet bomb', level: 1 },
    { name: 'tri attack', level: 1 },
    { name: 'zap cannon', level: 1 },
    { name: 'thunder shock', level: 5 },
    { name: 'thunder wave', level: 11 },
    { name: 'magnet bomb', level: 7 },
    { name: 'light screen', level: 13 },
    { name: 'sonic boom', level: 17 },
    { name: 'spark', level: 19 },
    { name: 'mirror shot', level: 23 },
    { name: 'metal sound', level: 25 },
    { name: 'electric ball', level: 29 },
    { name: 'flash cannon', level: 33 },
    { name: 'screech', level: 39 },
    { name: 'discharge', level: 43 },
    { name: 'lock-on', level: 49 },
    { name: 'magnet rise', level: 53 },
    { name: 'gyro ball', level: 59 },
    { name: 'zap cannon', level: 63 },
  ],
  wild_items: {
    common: [],
    rare: ['metal_coat', 'magnet'],
    guarantee: []
  }
};
