module.exports = {
  name: 'happiny',
  pokedex: 440,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'happiny', level: 0, condition: false },
      {  evolutionStep: 2, form: 'chansey', level: true, condition: ['day', 'oval stone']},
      {  evolutionStep: 3, form: 'blissey', level: true, condition: 'friendship'},
    ]
  },
  variant: false,
  stats: {
    hp: 100,
    atk: 5,
    def: 5,
    spAtk: 15,
    spDef: 65,
    spd: 30,
  },
  type: ['normal'],
  catchRate: 17.0,
  experienceYield: 110,
  genderRatio: [{m: 0}, {f: 100}],
  evYield: [
    { type: 'hp', value: 1 },
  ],
  abilities: [
    {name: 'natural cure', hidden: false },
    {name: 'serene grace', hidden: false },
    {name: 'friend guard', hidden: true },
  ],
  height: 0.6,
  weight: 24.4,
  moves: [
    { name: 'pound', level: 1 },
    { name: 'charm', level: 1 },
    { name: 'copycat', level: 5 },
    { name: 'refresh', level: 9 },
    { name: 'sweet kiss', level: 12 },
  ],
};