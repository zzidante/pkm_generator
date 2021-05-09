module.exports = {
  name: 'spearow',
  pokedex: 21,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'spearow', level: 0, condition: false },
      {  evolutionStep: 2, form: 'fearow', level: 20, condition: false },
    ]
  },
  variant: { type: false },
  stats: {
    hp: 40,
    atk: 60,
    def: 30,
    spAtk: 31,
    spDef: 31,
    spd: 70,
  },
  type: ['normal', 'flying'],
  catchRate: 33.3,
  experienceYield: 52,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 }
  ],
  abilities: [
    {name: 'keep eye', hidden: false },
    {name: 'sniper', hidden: true }
  ],
  height: 0.3,
  weight: 2.0,
  moves: [
    { name: 'peck', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'leer', level: 4 },
    { name: 'pursuit', level: 8 },
    { name: 'fury attack', level: 11 },
    { name: 'aerial ace', level: 15 },
    { name: 'mirror move', level: 18 },
    { name: 'assurance', level: 22 },
    { name: 'agility', level: 25 },
    { name: 'focus energy', level: 29 },
    { name: 'roost', level: 32 },
    { name: 'drill peck', level: 36 },
  ],
  wild_items: {
    common: [],
    rare: ['sharp_beak'],
    guarantee: []
  }
};
