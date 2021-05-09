module.exports = {
  name: 'seel',
  pokedex: 86,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'seel', level: 0, condition: false },
      {  evolutionStep: 2, form: 'dewgong', level: 34, condition: false },
    ]
  },
  variant: { type: false },  
  stats: {
    hp: 65,
    atk: 45,
    def: 55,
    spAtk: 45,
    spDef: 70,
    spd: 45,
  },
  type: ['water'],
  catchRate: 35.2,
  experienceYield: 65,
  genderRatio: [false],
  evYield: [
    { type: 'spdef', value: 1 }
  ],
  abilities: [
    {name: 'thick fat', hidden: false },
    {name: 'hydration', hidden: false },
    {name: 'ice body', hidden: true }
  ],
  height: 1.1,
  weight: 198.4 ,
  moves: [
    { name: 'headbutt', level: 1 },
    { name: 'growl', level: 4 },
    { name: 'encore', level: 8 },
    { name: 'aqua jet', level: 12 },
    { name: 'ice shard', level: 16 },
    { name: 'rest', level: 20 },
    { name: 'aurora beam', level: 26 },
    { name: 'waterfall', level: 32 },
    { name: 'take down', level: 38 },
    { name: 'ice beam', level: 44 },
    { name: 'double-edge', level: 50 },
  ],
  wild_items: {
    common: [],
    rare: ['aspear_berry'],
    guarantee: []
  }
};
