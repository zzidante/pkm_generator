module.exports = {
  name: 'quagsire',
  pokedex: 195,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'wooper', level: 0, condition: false },
      {  evolutionStep: 2, form: 'quagsire', level: 20, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 95,
    atk: 85,
    def: 85,
    spAtk: 65,
    spDef: 65,
    spd: 35,
  },
  type: ['water', 'ground'],
  catchRate: 11.8,
  experienceYield: 151,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'hp', value: 2 },
  ],
  abilities: [
    {name: 'damp', hidden: false },
    {name: 'water absorb', hidden: false },
    {name: 'unaware', hidden: true }
  ],
  height: 1.4,
  weight: 75.0,
  moves: [
    { name: 'water gun', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'mud sport', level: 1 },
    { name: 'mud sport', level: 5 },
    { name: 'mud shot', level: 9 },
    { name: 'slam', level: 15 },
    { name: 'mud bomb', level: 19 },
    { name: 'amnesia', level: 24 },
    { name: 'yawn', level: 31 },
    { name: 'earthquake', level: 36 },
    { name: 'rain dance', level: 41 },
    { name: 'mist', level: 48 },
    { name: 'haze', level: 48 },
    { name: 'muddy water', level: 53 },
  ],
};