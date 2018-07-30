module.exports = {
  name: 'magnemite',
  pokedex: 81,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'magnemite', level: 0, condition: false },
      {  evolutionStep: 2, form: 'magneton', level: 30, condition: 'fire stone' },
      {  evolutionStep: 2, form: 'magnezone', level: true, condition: ['magnetic field'] },
    ]
  },
  variant: { type: false },  
  stats: {
    hp: 25,
    atk: 35,
    def: 70,
    spAtk: 95,
    spDef: 55,
    spd: 45,
  },
  type: ['electric', 'steel'],
  catchRate: 24.8,
  experienceYield: 65,
  genderRatio: [false],
  evYield: [
    { type: 'spatk', value: 1 }
  ],
  abilities: [
    {name: 'magnet pull', hidden: false },
    {name: 'sturdy', hidden: false },
    {name: 'analytic', hidden: true }
  ],
  height: 0.3,
  weight: 6.0,
  moves: [
    { name: 'supersonic', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'thunder shock', level: 5 },
    { name: 'thunder wave', level: 11 },
    { name: 'magnet bomb', level: 7 },
    { name: 'light screen', level: 13 },
    { name: 'sonic boom', level: 17 },
    { name: 'spark', level: 19 },
    { name: 'mirror shot', level: 23 },
    { name: 'metal sound', level: 25 },
    { name: 'electric ball', level: 29 },
    { name: 'flash cannon', level: 31 },
    { name: 'screech', level: 35 },
    { name: 'discharge', level: 37 },
    { name: 'lock-on', level: 41 },
    { name: 'magnet rise', level: 43 },
    { name: 'gyro ball', level: 47 },
    { name: 'zap cannon', level: 49 },
  ],
};
