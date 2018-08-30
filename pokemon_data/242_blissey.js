module.exports = {
  name: 'blissey',
  pokedex: 242,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'happiny', level: 0, condition: false },
      {  evolutionStep: 2, form: 'chansey', level: true, condition: ['day', 'oval stone']},
      {  evolutionStep: 3, form: 'blissey', level: true, condition: 'friendship'},
    ]
  },
  variant: false,
  stats: {
    hp: 255,
    atk: 10,
    def: 10,
    spAtk: 75,
    spDef: 135,
    spd: 55,
  },
  type: ['normal'],
  catchRate: 3.9,
  experienceYield: 608,
  genderRatio: [{m: 0}, {f: 100}],
  evYield: [
    { type: 'hp', value: 3 },
  ],
  abilities: [
    {name: 'natural cure', hidden: false },
    {name: 'serene grace', hidden: false },
    {name: 'healer', hidden: true },
  ],
  height: 1.5,
  weight: 46.8,
  moves: [
    { name: 'defense curl', level: 1 },
    { name: 'double-edge', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'pound', level: 1 },
    { name: 'tail whip', level: 5 },
    { name: 'refresh', level: 9 },
    { name: 'double slap', level: 12 },
    { name: 'soft-boiled', level: 16 },
    { name: 'bestow', level: 20 },
    { name: 'minimize', level: 23 },
    { name: 'take down', level: 27 },
    { name: 'sing', level: 31 },
    { name: 'fling', level: 34 },
    { name: 'heal pulse', level: 39 },
    { name: 'egg bomb', level: 44 },
    { name: 'light screen', level: 50 },
    { name: 'healing wish', level: 57 },
    { name: 'double-edge', level: 65 },
  ],
};