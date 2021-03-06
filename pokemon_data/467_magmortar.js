module.exports = {
  name: 'magmortar',
  pokedex: 467,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'magby', level: 0, condition: false },
      {  evolutionStep: 2, form: 'magmar', level: 30, condition: false },
      {  evolutionStep: 3, form: 'magmortar', level: false, condition: ['trade', 'magmarizer'] },
    ]
  },
  variant: false,
  stats: {
    hp: 75,
    atk: 95,
    def: 67,
    spAtk: 125,
    spDef: 95,
    spd: 83,
  },
  type: ['fire'],
  catchRate: 3.9,
  experienceYield: 243,
  genderRatio: [{m: 75}, {f: 25}],
  evYield: [
    { type: 'spAtk', value: 3 },
  ],
  abilities: [
    {name: 'flame body', hidden: false },
    {name: 'vital spirit', hidden: true },
  ],
  height: 1.6,
  weight: 68.0,
  moves: [
    { name: 'thunder punch', level: 1 },
    { name: 'smog', level: 1 },
    { name: 'leer', level: 1 },
    { name: 'ember', level: 1 },
    { name: 'smokescreen', level: 1 },
    { name: 'ember', level: 5 },
    { name: 'smokescreen', level: 8 },
    { name: 'feint attack', level: 12 },
    { name: 'fire spin', level: 15 },
    { name: 'clear smog', level: 19 },
    { name: 'flame burst', level: 22 },
    { name: 'confuse ray', level: 26 },
    { name: 'fire punch', level: 29 },
    { name: 'lava plume', level: 36 },
    { name: 'sunny day', level: 42 },
    { name: 'flamethrower', level: 49 },
    { name: 'fire blast', level: 55 },
    { name: 'hyper beam', level: 55 },
  ],
};