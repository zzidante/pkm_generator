module.exports = {
  name: 'caterpie',
  pokedex: 10,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'caterpie', level: 0, condition: false },
      {  evolutionStep: 2, form: 'metapod', level: 7, condition: false },
      {  evolutionStep: 3, form: 'butterfree', level: 10, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 45,
    atk: 30,
    def: 35,
    spAtk: 20,
    spDef: 20,
    spd: 45,
  },
  type: ['bug'],
  catchRate: 33.3,
  experienceYield: 39,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'hp', value: 1 },
  ],
  abilities: [
    {name: 'shield dust', hidden: false },
    {name: 'run away', hidden: true },
  ],
  height: 0.3,
  weight: 2.9,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'string shot', level: 1 },
    { name: 'bug bite', level: 9 },
  ],
};