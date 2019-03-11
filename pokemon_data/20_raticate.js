module.exports = {
  name: 'raticate',
  pokedex: 20,
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
    hp: 55,
    atk: 81,
    def: 60,
    spAtk: 50,
    spDef: 70,
    spd: 97,
  },
  type: ['normal'],
  catchRate: 16.6,
  experienceYield: 145,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 2 }
  ],
  abilities: [
    {name: 'run away', hidden: false },
    {name: 'guts', hidden: false },
    {name: 'hustle', hidden: true }
  ],
  height: 0.7,
  weight: 18.5,
  moves: [
    { name: 'scary face', level: -1 },
    { name: 'swords dance', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'quick attack', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'focus energy', level: 1 },
    { name: 'quick attack', level: 4 },
    { name: 'focus energy', level: 7 },
    { name: 'bite', level: 10 },
    { name: 'pursuit', level: 13 },
    { name: 'hyper fang', level: 16 },
    { name: 'assurance', level: 19 },
    { name: 'crunch', level: 24 },
    { name: 'sucker punch', level: 29 },
    { name: 'super fang', level: 34 },
    { name: 'double-edge', level: 39 },
    { name: 'endeavor', level: 44 },
  ],
};
