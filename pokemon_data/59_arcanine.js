module.exports = {
  name: 'arcanine',
  pokedex: 59,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'growlithe', level: 0, condition: false },
      {  evolutionStep: 2, form: 'arcanine', level: false, condition: 'fire stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 90,
    atk: 110,
    def: 80,
    spAtk: 100,
    spDef: 80,
    spd: 95,
  },
  type: ['fire'],
  catchRate: 9.8,
  experienceYield: 194,
  genderRatio: [{m: 75}, {f: 25}],
  evYield: [
    { type: 'atk', value: 2 }
  ],
  abilities: [
    {name: 'intimidate', hidden: false },
    {name: 'flash fire', hidden: false },
    {name: 'justified', hidden: true }
  ],
  height: 1.9,
  weight: 155.0,
  moves: [
    { name: 'thunder fang', level: 1 },    
    { name: 'bite', level: 1 },
    { name: 'roar', level: 1 },
    { name: 'odor sleuth', level: 1 },
    { name: 'fire fang', level: 1 },
    { name: 'extreme speed', level: 34 },
  ],
};
