module.exports = {
  name: 'oddish',
  pokedex: 43,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'oddish', level: 0, condition: false },
      {  evolutionStep: 2, form: 'gloom', level: 21, condition: false },
      {  evolutionStep: 3, form: 'vileplume', level: false, condition: 'leaf stone' },
      {  evolutionStep: 3, form: 'bellossom', level: false, condition: 'sun stone' },
    ]
  },
  stats: {
    hp: 45,
    atk: 50,
    def: 55,
    spAtk: 75,
    spDef: 65,
    spd: 30,
  },
  type: ['grass', 'poison'],
  catchRate: 33.3,
  experienceYield: 64,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spatk', value: 1 }
  ],
  abilities: [
    {name: 'chlorophyll', hidden: false },
    {name: 'run away', hidden: true }
  ],
  height: 0.5,
  weight: 5.4,
  moves: [
    { name: 'absorb', level: 1 },
    { name: 'growth', level: 1 },
    { name: 'sweet scent', level: 5 },
    { name: 'acid', level: 9 },
    { name: 'poison powder', level: 13 },
    { name: 'stun spore', level: 14 },
    { name: 'sleep powder', level: 15 },
    { name: 'mega drain', level: 19 },
    { name: 'lucky chant', level: 23 },
    { name: 'moonlight', level: 27 },
    { name: 'giga drain', level: 31 },
    { name: 'toxic', level: 35 },
    { name: 'natural gift', level: 39 },
    { name: 'moonblast', level: 43 },
    { name: 'grassy terrain', level: 47 },
    { name: 'petal dance', level: 51 },
  ],
};
