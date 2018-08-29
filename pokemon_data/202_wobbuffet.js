module.exports = {
  name: 'wobbuffet',
  pokedex: 202,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'wynaut', level: 0, condition: false },
      {  evolutionStep: 2, form: 'wobbuffet', level: 15, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 190,
    atk: 33,
    def: 58,
    spAtk: 33,
    spDef: 58,
    spd: 33,
  },
  type: ['psychic'],
  catchRate: 5.9,
  experienceYield: 142,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'hp', value: 2 },
  ],
  abilities: [
    {name: 'shadow tag', hidden: false },
    {name: 'telepathy', hidden: true },
  ],
  height: 1.3,
  weight: 28.5,
  moves: [
    { name: 'counter', level: 1 },
    { name: 'mirror coat', level: 1 },
    { name: 'safeguard', level: 1 },
    { name: 'destiny bond', level: 1 },
  ],
};