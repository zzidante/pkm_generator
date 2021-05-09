module.exports = {
  name: 'charmeleon',
  pokedex: 5,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'charmander', level: 0, condition: false },
      {  evolutionStep: 2, form: 'charmeleon', level: 16, condition: false },
      {  evolutionStep: 3, form: 'charizard', level: 36, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 58,
    atk: 64,
    def: 58,
    spAtk: 80,
    spDef: 65,
    spd: 80,
  },
  type: ['fire'],
  catchRate: 5.9,
  experienceYield: 142,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'spAtk', value: 1 },
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'blaze', hidden: false },
    {name: 'solar power', hidden: true },
  ],
  height: 1.1,
  weight: 19.0,
  moves: [
    { name: 'scratch', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'ember', level: 1 },
    { name: 'ember', level: 7 },
    { name: 'smokescreen', level: 10 },
    { name: 'dragon rage', level: 17 },
    { name: 'scary face', level: 21 },
    { name: 'fire fang', level: 28 },
    { name: 'flame burst', level: 32 },
    { name: 'slash', level: 39 },
    { name: 'flamethrower', level: 43 },
    { name: 'fire spin', level: 50 },
    { name: 'inferno', level: 54 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};