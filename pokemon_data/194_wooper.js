module.exports = {
  name: 'wooper',
  pokedex: 194,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'wooper', level: 0, condition: false },
      {  evolutionStep: 2, form: 'quagsire', level: 20, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 55,
    atk: 45,
    def: 45,
    spAtk: 25,
    spDef: 25,
    spd: 15,
  },
  type: ['water', 'ground'],
  catchRate: 33.3,
  experienceYield: 42,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'hp', value: 1 },
  ],
  abilities: [
    {name: 'damp', hidden: false },
    {name: 'water absorb', hidden: false },
    {name: 'unaware', hidden: true }
  ],
  height: 0.4,
  weight: 8.5,
  moves: [
    { name: 'water gun', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'mud sport', level: 5 },
    { name: 'mud shot', level: 9 },
    { name: 'slam', level: 15 },
    { name: 'mud bomb', level: 19 },
    { name: 'amnesia', level: 23 },
    { name: 'yawn', level: 29 },
    { name: 'earthquake', level: 33 },
    { name: 'rain dance', level: 37 },
    { name: 'mist', level: 43 },
    { name: 'haze', level: 43 },
    { name: 'muddy water', level: 47 },
  ],
};