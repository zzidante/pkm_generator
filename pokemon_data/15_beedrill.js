module.exports = {
  name: 'beedrill',
  pokedex: 15,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'weedle', level: 0, condition: false },
      {  evolutionStep: 2, form: 'kakuna', level: 7, condition: false },
      {  evolutionStep: 3, form: 'beedrill', level: 10, condition: false },
    ]
  },
  variant: 'mega',
  stats: {
    hp: 65,
    atk: 90,
    def: 40,
    spAtk: 45,
    spDef: 80,
    spd: 75,
  },
  type: ['bug', 'poison'],
  catchRate: 5.9,
  experienceYield: 178,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 2 },
    { type: 'spDef', value: 1 },
  ],
  abilities: [
    {name: 'swarm', hidden: false },
    {name: 'sniper', hidden: true },
  ],
  height: 1.0,
  weight: 29.5,
  moves: [
    { name: 'twineedle', level: -1 },
    { name: 'twineedle', level: 1 },
    { name: 'fury attack', level: 1 },
    { name: 'fury attack', level: 11 },
    { name: 'rage', level: 14 },
    { name: 'pursuit', level: 17 },
    { name: 'focus energy', level: 20 },
    { name: 'venoshock', level: 23 },
    { name: 'assurance', level: 26 },
    { name: 'toxic spikes', level: 29 },
    { name: 'pin missile', level: 32 },
    { name: 'poison jab', level: 35 },
    { name: 'agility', level: 38 },
    { name: 'endeavor', level: 41 },
    { name: 'fell stinger', level: 44 },
  ],
  wild_items: {
    common: [],
    rare: ['barb_poison'],
    guarantee: []
  }
};