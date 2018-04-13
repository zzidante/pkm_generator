module.exports = {
  name: 'growlithe',
  pokedex: 58,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'growlithe', level: 0, condition: false },
      {  evolutionStep: 2, form: 'arcanine', level: false, condition: 'fire stone' },
    ]
  },
  regional_variant: { type: false },  
  stats: {
    hp: 55,
    atk: 70,
    def: 45,
    spAtk: 70,
    spDef: 50,
    spd: 60,
  },
  type: ['fire'],
  catchRate: 24.8,
  experienceYield: 70,
  genderRatio: [{m: 75}, {f: 25}],
  evYield: [
    { type: 'atk', value: 1 }
  ],
  abilities: [
    {name: 'intimidate', hidden: false },
    {name: 'flash fire', hidden: false },
    {name: 'justified', hidden: true }
  ],
  height: 0.7,
  weight: 19.0,
  moves: [
    { name: 'bite', level: 1 },
    { name: 'roar', level: 1 },
    { name: 'ember', level: 6 },
    { name: 'leer', level: 8 },
    { name: 'odor sleuth', level: 10 },
    { name: 'helping hand', level: 12 },
    { name: 'flame wheel', level: 17 },
    { name: 'reversal', level: 19 },
    { name: 'fire fang', level: 21 },
    { name: 'take down', level: 23 },
    { name: 'flame burst', level: 28 },
    { name: 'agility', level: 30 },
    { name: 'retaliate', level: 32 },
    { name: 'flamethrower', level: 34 },
    { name: 'crunch', level: 39 },
    { name: 'heat wave', level: 41 },
    { name: 'outrage', level: 43 },
    { name: 'flare blitz', level: 45 },
  ],
};
