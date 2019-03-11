module.exports = {
  name: 'fearow',
  pokedex: 22,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'spearow', level: 0, condition: false },
      {  evolutionStep: 2, form: 'fearow', level: 20, condition: false },
    ]
  },
  variant: { type: false },
  stats: {
    hp: 65,
    atk: 90,
    def: 65,
    spAtk: 61,
    spDef: 61,
    spd: 100,
  },
  type: ['normal', 'flying'],
  catchRate: 11.8,
  experienceYield: 155,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 2 }
  ],
  abilities: [
    {name: 'keep eye', hidden: false },
    {name: 'sniper', hidden: true }
  ],
  height: 1.2,
  weight: 38.0,
  moves: [
    { name: 'drill run', level: 1 },
    { name: 'pluck', level: 1 },
    { name: 'peck', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'pursuit', level: 1 },
    { name: 'leer', level: 4 },
    { name: 'pursuit', level: 8 },
    { name: 'fury attack', level: 11 },
    { name: 'aerial ace', level: 15 },
    { name: 'mirror move', level: 18 },
    { name: 'assurance', level: 23 },
    { name: 'agility', level: 27 },
    { name: 'focus energy', level: 32 },
    { name: 'roost', level: 36 },
    { name: 'drill peck', level: 41 },
    { name: 'drill run', level: 45 },
  ],
};
