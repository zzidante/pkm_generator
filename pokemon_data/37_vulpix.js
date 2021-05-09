module.exports = {
  name: 'vulpix',
  pokedex: 37,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'vulpix', level: 0, condition: false },
      {  evolutionStep: 2, form: 'ninetails', level: false, condition: 'fire stone' },
    ]
  },
  stats: {
    hp: 38,
    atk: 41,
    def: 40,
    spAtk: 50,
    spDef: 65,
    spd: 65,
  },
  type: ['fire'],
  catchRate: 24.8,
  experienceYield: 60,
  genderRatio: [{m: 25}, {f: 75}],
  evYield: [
    { type: 'spd', value: 1 }
  ],
  abilities: [
    {name: 'flash fire', hidden: false },
    {name: 'drought', hidden: true }
  ],
  height: 0.6,
  weight: 9.9,
  moves: [
    { name: 'ember', level: 1 },
    { name: 'tail whip', level: 4 },
    { name: 'roar', level: 7 },
    { name: 'baby-doll eyes', level: 9 },
    { name: 'quick attack', level: 10 },
    { name: 'confuse ray', level: 12 },
    { name: 'fire spin', level: 15 },
    { name: 'payback', level: 18 },
    { name: 'will-o-wisp', level: 20 },
    { name: 'feint attack', level: 23 },
    { name: 'hex', level: 26 },
    { name: 'flame burst', level: 28 },
    { name: 'extrasensory', level: 31 },
    { name: 'safeguard', level: 34 },
    { name: 'flamethrower', level: 36 },
    { name: 'imprison', level: 39 },
    { name: 'fire blast', level: 42 },
    { name: 'grudge', level: 44 },
    { name: 'captivate', level: 47 },
    { name: 'inferno', level: 50 },
  ],
  wild_items: {
    common: ['rawst_berry'],
    rare: ['charcoal'],
    guarantee: []
  }
};
