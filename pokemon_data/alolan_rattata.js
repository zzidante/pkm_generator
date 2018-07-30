// need to complete this entry

module.exports = {
  name: 'alolan rattata',
  pokedex: 19,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'rattata', level: 0, condition: false },
      {  evolutionStep: 2, form: 'raticate', level: 20, condition: false },
    ]
  },
  variant: { type: 'alolan' },
  stats: {
    hp: 30,
    atk: 56,
    def: 35,
    spAtk: 25,
    spDef: 35,
    spd: 72,
  },
  type: ['normal'],
  catchRate: 33.3,
  experienceYield: 51,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 }
  ],
  abilities: [
    {name: 'run away', hidden: false },
    {name: 'guts', hidden: false },
    {name: 'hustle', hidden: true }
  ],
  height: 0.3,
  weight: 3.5,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'quick attack', level: 4 },
    { name: 'focus energy', level: 7 },
    { name: 'bite', level: 10 },
    { name: 'pursuit', level: 13 },
    { name: 'hyper fang', level: 16 },
    { name: 'assurance', level: 19 },
    { name: 'crunch', level: 22 },
    { name: 'sucker punch', level: 25 },
    { name: 'super fang', level: 28 },
    { name: 'double-edge', level: 31 },
    { name: 'endeavor', level: 34 },
  ],
};
