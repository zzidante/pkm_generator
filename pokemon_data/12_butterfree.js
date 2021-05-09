module.exports = {
  name: 'butterfree',
  pokedex: 12,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'caterpie', level: 0, condition: false },
      {  evolutionStep: 2, form: 'metapod', level: 7, condition: false },
      {  evolutionStep: 3, form: 'butterfree', level: 10, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 60,
    atk: 45,
    def: 50,
    spAtk: 90,
    spDef: 80,
    spd: 70,
  },
  type: ['bug', 'flying'],
  catchRate: 5.9,
  experienceYield: 178,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spAtk', value: 2 },
    { type: 'spDef', value: 1 },
  ],
  abilities: [
    {name: 'compound eyes', hidden: false },
    {name: 'tinted lens', hidden: true },
  ],
  height: 1.1,
  weight: 32.0,
  moves: [
    { name: 'gust', level: -1 },
    { name: 'gust', level: 1 },
    { name: 'confusion', level: 1 },
    { name: 'confusion', level: 11 },
    { name: 'poison powder', level: 13 },
    { name: 'stun spore', level: 13 },
    { name: 'sleep powder', level: 13 },
    { name: 'psybeam', level: 17 },
    { name: 'silver wind', level: 19 },
    { name: 'supersonic', level: 23 },
    { name: 'safeguard', level: 25 },
    { name: 'whirlwind', level: 29 },
    { name: 'bug buzz', level: 31 },
    { name: 'rage powder', level: 35 },
    { name: 'captivate', level: 37 },
    { name: 'tailwind', level: 41 },
    { name: 'air slash', level: 43 },
    { name: 'quiver dance', level: 47 },
  ],
  wild_items: {
    common: [],
    rare: ['silver_powder'],
    guarantee: []
  }
};