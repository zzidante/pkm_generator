module.exports = {
  name: 'pikachu',
  pokedex: 25,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'pichu', level: 0, condition: false },
      {  evolutionStep: 2, form: 'pikachu', level: 0, condition: 'high friendship' },
      {  evolutionStep: 3, form: 'raichu', level: 22, condition: 'thunder stone' },
    ]
  },
  regional_variant: { type: 'alolan' },
  stats: {
    hp: 35,
    atk: 55,
    def: 30,
    spAtk: 50,
    spDef: 40,
    spd: 90,
  },
  type: ['electric'],
  catchRate: 24.8,
  experienceYield: 112,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 2 }
  ],
  abilities: [
    {name: 'static', hidden: false },
    {name: 'lightning rod', hidden: true }
  ],
  height: 0.4,
  weight: 6.0,
  moves: [
    { name: 'thunder shock', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'tail whip', level: 3 },
    { name: 'quick attack', level: 6 },
    { name: 'double kick', level: 9 },
    { name: 'double team', level: 12 },
    { name: 'thunder wave', level: 15 },
    { name: 'light screen', level: 18 },
    { name: 'thunderbolt', level: 21 },
    { name: 'slam', level: 24 },
    { name: 'agility', level: 27 },
    { name: 'thunder', level: 30 },
  ],
  wild_items: {
    common: ['oran_berry'],
    rare: ['light_ball'],
    guarantee: []
  }
};
