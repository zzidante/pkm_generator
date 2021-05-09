module.exports = {
  name: 'gloom',
  pokedex: 44,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'oddish', level: 0, condition: false },
      {  evolutionStep: 2, form: 'gloom', level: 21, condition: false },
      {  evolutionStep: 3, form: 'vileplume', level: false, condition: 'leaf stone' },
      {  evolutionStep: 3, form: 'bellossom', level: false, condition: 'sun stone' },
    ]
  },
  stats: {
    hp: 60,
    atk: 65,
    def: 70,
    spAtk: 85,
    spDef: 75,
    spd: 40,
  },
  type: ['grass', 'poison'],
  catchRate: 15.7,
  experienceYield: 138,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spatk', value: 2 }
  ],
  abilities: [
    {name: 'chlorophyll', hidden: false },
    {name: 'stench', hidden: true }
  ],
  height: 0.8,
  weight: 8.6,
  moves: [
    { name: 'absorb', level: 1 },
    { name: 'growth', level: 1 },
    { name: 'sweet scent', level: 1 },
    { name: 'acid', level: 1 },
    { name: 'sweet scent', level: 5 },
    { name: 'acid', level: 9 },
    { name: 'poison powder', level: 13 },
    { name: 'stun spore', level: 14 },
    { name: 'sleep powder', level: 15 },
    { name: 'mega drain', level: 19 },
    { name: 'lucky chant', level: 24 },
    { name: 'moonlight', level: 29 },
    { name: 'giga drain', level: 34 },
    { name: 'toxic', level: 39 },
    { name: 'natural gift', level: 44 },
    { name: 'petal blizzard', level: 49 },
    { name: 'grassy terrain', level: 54 },
    { name: 'petal dance', level: 59 },
  ],
  wild_items: {
    common: ['absorb_bulb'],
    rare: [],
    guarantee: []
  }
};
