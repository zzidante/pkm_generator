module.exports = {
  name: 'mega_slowbro',
  pokedex: 80,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'slowpoke', level: 0, condition: false },
      {  evolutionStep: 2, form: 'slowbro', level: 37, condition: false },
    ]
  },
  variant: 'standard',
  stats: {
    hp: 95,
    atk: 75,
    def: 180,
    spAtk: 130,
    spDef: 80,
    spd: 30,
  },
  type: ['water', 'psychic'],
  catchRate: 9.8,
  experienceYield: 207,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 2 },
  ],
  abilities: [
    {name: 'shell armor', hidden: false },
  ],
  height: 2.0,
  weight: 120.0,
  moves: [
    { name: 'withdraw', level: -1 },
    { name: 'withdraw', level: 1 },
    { name: 'heal pulse', level: 1 },
    { name: 'curse', level: 1 },
    { name: 'yawn', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'growl', level: 5 },
    { name: 'water gun', level: 9 },
    { name: 'confusion', level: 14 },
    { name: 'disable', level: 19 },
    { name: 'headbutt', level: 23 },
    { name: 'water pulse', level: 28 },
    { name: 'zen headbutt', level: 32 },
    { name: 'slack off', level: 36 },
    { name: 'amnesia', level: 43 },
    { name: 'psychic', level: 49 },
    { name: 'rain dance', level: 55 },
    { name: 'psych up', level: 62 },
    { name: 'heal pulse', level: 68 },
  ],
  wild_items: {
    common: [],
    rare: ['kings_rock'],
    guarantee: []
  }
};