module.exports = {
  name: 'flareon',
  pokedex: 136,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'eevee', level: 0, condition: false },
      {  evolutionStep: 2, form: 'flareon', level: false, condition: 'fire stone' },
    ]
  },
  variant: false,
  stats: {
    hp: 65,
    atk: 130,
    def: 60,
    spAtk: 95,
    spDef: 110,
    spd: 65,
  },
  type: ['fire'],
  catchRate: 5.9,
  experienceYield: 184,
  genderRatio: [{m: 87.5}, {f: 12.5}],
  evYield: [
    { type: 'atk', value: 2 },
  ],
  abilities: [
    {name: 'flash fire', hidden: false },
    {name: 'guts', hidden: true }
  ],
  height: 0.9,
  weight: 25.0,
  moves: [
    { name: 'ember', level: -1 },
    { name: 'ember', level: 1 },
    { name: 'helping hand', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'tail whip', level: 1 },
    { name: 'sand attack', level: 5 },
    { name: 'baby-doll eyes', level: 9 },
    { name: 'quick atack', level: 13 },
    { name: 'bite', level: 17 },
    { name: 'fire fang', level: 20 },
    { name: 'fire spin', level: 25 },
    { name: 'scary face', level: 29 },
    { name: 'smog', level: 33 },
    { name: 'lava plume', level: 37 },
    { name: 'last resort', level: 41 },
    { name: 'flare blitz', level: 45 },
  ],
};