module.exports = {
  name: 'mega_charizard_y',
  pokedex: 6,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'charmander', level: 0, condition: false },
      {  evolutionStep: 2, form: 'charmeleon', level: 16, condition: false },
      {  evolutionStep: 3, form: 'charizard', level: 36, condition: false },
    ]
  },
  variant: ['standard', 'mega_x'],
  stats: {
    hp: 78,
    atk: 104,
    def: 78,
    spAtk: 159,
    spDef: 115,
    spd: 100,
  },
  type: ['fire', 'flying'],
  catchRate: 5.9,
  experienceYield: 285,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'spAtk', value: 3 },
  ],
  abilities: [
    {name: 'drought', hidden: false },
  ],
  height: 1.7,
  weight: 100.5,
  moves: [
    { name: 'wing attack', level: -1 },
    { name: 'wing attack', level: 1 },
    { name: 'flare blitz', level: 1 },
    { name: 'heat wave', level: 1 },
    { name: 'dragon claw', level: 1 },
    { name: 'shadow claw', level: 1 },
    { name: 'air slash', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'ember', level: 1 },
    { name: 'ember', level: 7 },
    { name: 'smokescreen', level: 10 },
    { name: 'dragon rage', level: 17 },
    { name: 'scary face', level: 21 },
    { name: 'fire fang', level: 28 },
    { name: 'flame burst', level: 32 },
    { name: 'slash', level: 41 },
    { name: 'flamethrower', level: 47 },
    { name: 'fire spin', level: 56 },
    { name: 'inferno', level: 62 },
    { name: 'heat wave', level: 71 },
    { name: 'flare blitz', level: 77 },
  ],
  wild_items: {
    common: [],
    rare: [],
    guarantee: []
  }
};