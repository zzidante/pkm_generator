module.exports = {
  name: 'doduo',
  pokedex: 84,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'doduo', level: 0, condition: false },
      {  evolutionStep: 2, form: 'dodrio', level: 31, condition: false },
    ]
  },
  variant: { type: false },  
  stats: {
    hp: 35,
    atk: 85,
    def: 45,
    spAtk: 35,
    spDef: 35,
    spd: 75,
  },
  type: ['normal', 'flying'],
  catchRate: 24.8,
  experienceYield: 62,
  genderRatio: [{m: 50}, {f: 50}],  
  evYield: [
    { type: 'atk', value: 1 }
  ],
  abilities: [
    {name: 'run away', hidden: false },
    {name: 'early bird', hidden: false },
    {name: 'tangled feet', hidden: true }
  ],
  height: 1.4,
  weight: 86.4,
  moves: [
    { name: 'peck', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'quick attack', level: 5 },
    { name: 'rage', level: 8 },
    { name: 'fury attack', level: 12 },
    { name: 'pursuit', level: 15 },
    { name: 'pluck', level: 19 },
    { name: 'double hit', level: 22 },
    { name: 'agility', level: 26 },
    { name: 'uproar', level: 29 },
    { name: 'acupressure', level: 33 },
    { name: 'swords dance', level: 36 },
    { name: 'jumpi kick', level: 40 },
    { name: 'drill peck', level: 43 },
    { name: 'endeavor', level: 47 },
    { name: 'thrash', level: 50 },
  ],
};
