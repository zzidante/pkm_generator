module.exports = {
  name: 'ninetails',
  pokedex: 38,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'vulpix', level: 0, condition: false },
      {  evolutionStep: 2, form: 'ninetails', level: false, condition: 'fire stone' },
    ]
  },
  stats: {
    hp: 73,
    atk: 76,
    def: 75,
    spAtk: 81,
    spDef: 100,
    spd: 100,
  },
  type: ['fire'],
  catchRate: 9.8,
  experienceYield: 177,
  genderRatio: [{m: 25}, {f: 75}],
  evYield: [
    { type: 'sp_def', value: 1 },
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'flash fire', hidden: false },
    {name: 'drought', hidden: true }
  ],
  height: 1.1,
  weight: 19.9,
  moves: [
    { name: 'imprison', level: 1 },
    { name: 'nasty plot', level: 1 },
    { name: 'flamethrower', level: 1 },
    { name: 'quick attack', level: 1 },
    { name: 'confuse ray', level: 1 },
    { name: 'safeguard', level: 1 },
  ],
};
