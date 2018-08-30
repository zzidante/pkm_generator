module.exports = {
  name: 'shuckle',
  pokedex: 213,
  evolution: {
    hasEvolutions: false,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 1,
    details: [
      {  evolutionStep: 1, form: 'shuckle', level: 0, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 20,
    atk: 10,
    def: 230,
    spAtk: 10,
    spDef: 230,
    spd: 5,
  },
  type: ['bug', 'rock'],
  catchRate: 24.8,
  experienceYield: 177,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 1 },
    { type: 'spDef', value: 1 },
  ],
  abilities: [
    {name: 'sturdy', hidden: false },
    {name: 'gluttony', hidden: false },
    {name: 'contrary', hidden: true },
  ],
  height: 0.6,
  weight: 20.5,
  moves: [
    { name: 'sticky web', level: 1 },
    { name: 'withdraw', level: 1 },
    { name: 'constrict', level: 1 },
    { name: 'bide', level: 1 },
    { name: 'rollout', level: 1 },
    { name: 'encore', level: 5 },
    { name: 'wrap', level: 9 },
    { name: 'struggle bug', level: 12 },
    { name: 'safeguard', level: 16 },
    { name: 'rest', level: 20 },
    { name: 'rock throw', level: 23 },
    { name: 'gastro acid', level: 27 },
    { name: 'power trick', level: 31 },
    { name: 'shell smash', level: 34 },
    { name: 'rock slide', level: 38 },
    { name: 'bug bite', level: 42 },
    { name: 'power split', level: 45 },
    { name: 'guard split', level: 45 },
    { name: 'stone edge', level: 49 },
    { name: 'sticky web', level: 53 },
  ],
};