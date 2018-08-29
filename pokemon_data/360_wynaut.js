module.exports = {
  name: 'wynaut',
  pokedex: 360,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'wynaut', level: 0, condition: false },
      {  evolutionStep: 2, form: 'wobbuffet', level: 15, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 95,
    atk: 23,
    def: 48,
    spAtk: 23,
    spDef: 48,
    spd: 23,
  },
  type: ['psychic'],
  catchRate: 16.3,
  experienceYield: 52,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'hp', value: 1 },
  ],
  abilities: [
    {name: 'shadow tag', hidden: false },
    {name: 'telepathy', hidden: true },
  ],
  height: 0.6,
  weight: 14.0,
  moves: [
    { name: 'splash', level: 1 },
    { name: 'charm', level: 1 },
    { name: 'encore', level: 1 },
    { name: 'counter', level: 15 },
    { name: 'mirror coat', level: 15 },
    { name: 'safeguard', level: 15 },
    { name: 'destiny bond', level: 15 },
  ],
};