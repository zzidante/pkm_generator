module.exports = {
  name: 'venomoth',
  pokedex: 49,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'venonat', level: 0, condition: false },
      {  evolutionStep: 2, form: 'venomoth', level: 31, condition: false },
    ]
  },
  stats: {
    hp: 70,
    atk: 65,
    def: 60,
    spAtk: 90,
    spDef: 75,
    spd: 90,
  },
  type: ['bug', 'poison'],
  catchRate: 9.8,
  experienceYield: 158,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spatk', value: 1 },
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'shield dust', hidden: false },
    {name: 'tinted lens', hidden: false },
    {name: 'wonder skin', hidden: true }
  ],
  height: 1.5,
  weight: 12.5,
  moves: [
    { name: 'gust', level: 1 },
    { name: 'quiver dance', level: 1 },
    { name: 'bug buzz', level: 1 },
    { name: 'silver wind', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'disable', level: 1 },
    { name: 'foresight', level: 1 },
    { name: 'supersonic', level: 1 },
    { name: 'gust', level: -1 },
    { name: 'supersonic', level: 5 },
    { name: 'confusion', level: 11 },
    { name: 'poison powder', level: 13 },
    { name: 'psybeam', level: 17 },
    { name: 'stun spore', level: 23 },
    { name: 'signal beam', level: 25 },
    { name: 'sleep powder', level: 29 },
    { name: 'leech life', level: 37 },
    { name: 'zen headbutt', level: 41 },
    { name: 'poison fang', level: 47 },
    { name: 'psychic', level: 55 },
    { name: 'bug buzz', level: 59 },
    { name: 'quiver dance', level: 63 },
  ],
  wild_items: {
    common: [],
    rare: ['shed_shell', 'silver_powder'],
    guarantee: []
  }
};
