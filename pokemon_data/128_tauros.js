module.exports = {
  name: 'tauros',
  pokedex: 128,
  evolution: {
    hasEvolutions: false,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 1,
    details: [
      {  evolutionStep: 1, form: 'tauros', level: 0, condition: false },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 75,
    atk: 100,
    def: 95,
    spAtk: 40,
    spDef: 70,
    spd: 110,
  },
  type: ['normal'],
  catchRate: 5.9,
  experienceYield: 172,
  genderRatio: [{m: 100}],
  evYield: [
    { type: 'atk', value: 1 },
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'intimidate', hidden: false },
    {name: 'anger point', hidden: false },
    {name: 'sheer force', hidden: true }
  ],
  height: 1.4,
  weight: 88.4,
  moves: [
    { name: 'tackle', level: 1 },
    { name: 'tail whip', level: 3 },
    { name: 'rage', level: 5 },
    { name: 'horn attack', level: 8 },
    { name: 'scary face', level: 11 },
    { name: 'pursuit', level: 15 },
    { name: 'rest', level: 19 },
    { name: 'payback', level: 24 },
    { name: 'work up', level: 29 },
    { name: 'take down', level: 35 },
    { name: 'zen headbutt', level: 41 },
    { name: 'swagger', level: 48 },
    { name: 'thrash', level: 55 },
    { name: 'double edge', level: 63 },
    { name: 'edge', level: 71 },
  ],
};
