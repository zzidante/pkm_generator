module.exports = {
  name: 'corsola',
  pokedex: 222,
  evolution: {
    hasEvolutions: false,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 1,
    details: [
      {  evolutionStep: 1, form: 'corsola', level: 0, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 65,
    atk: 55,
    def: 95,
    spAtk: 65,
    spDef: 95,
    spd: 35,
  },
  type: ['water', 'rock'],
  catchRate: 7.8,
  experienceYield: 144,
  genderRatio: [{m: 25}, {f: 75}],
  evYield: [
    { type: 'def', value: 1 },
    { type: 'spDef', value: 1 },
  ],
  abilities: [
    {name: 'husle', hidden: false },
    {name: 'natural cure', hidden: false },
    {name: 'regenerator', hidden: true },
  ],
  height: 0.6,
  weight: 5.0,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'harden', level: 1 },
    { name: 'bubble', level: 4 },
    { name: 'recover', level: 8 },
    { name: 'bubblebeam', level: 10 },
    { name: 'refresh', level: 13 },
    { name: 'ancient power', level: 17 },
    { name: 'spike cannon', level: 20 },
    { name: 'lucky chant', level: 23 },
    { name: 'brine', level: 27 },
    { name: 'iron defense', level: 29 },
    { name: 'rock blast', level: 31 },
    { name: 'ensure', level: 35 },
    { name: 'aqua ring', level: 38 },
    { name: 'power gem', level: 41 },
    { name: 'mirror coat', level: 45 },
    { name: 'earth power', level: 47 },
    { name: 'flail', level: 50 },
  ],
};