module.exports = {
  name: 'alolan ninetails',
  pokedex: 38,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'alolan vulpix', level: 0, condition: false },
      {  evolutionStep: 2, form: 'alolan ninetails', level: false, condition: 'ice stone' },
    ]
  },
  stats: {
    hp: 73,
    atk: 67,
    def: 75,
    spAtk: 81,
    spDef: 100,
    spd: 109,
  },
  type: ['ice', 'fairy'],
  catchRate: 9.8,
  experienceYield: 177,
  genderRatio: [{m: 25}, {f: 75}],
  evYield: [
    { type: 'spd', value: 2 }
  ],
  abilities: [
    {name: 'snow cloak', hidden: false },
    {name: 'snow warning', hidden: true }
  ],
  height: 1.1,
  weight: 19.9,
  moves: [
    { name: 'dazzling gleam', level: 1 },
    { name: 'imprison', level: 1 },
    { name: 'nasty plot', level: 1 },
    { name: 'ice beam', level: 1 },
    { name: 'ice shard', level: 1 },
    { name: 'confuse ray', level: 1 },
    { name: 'safeguard', level: 1 },
    { name: 'dazzling gleam', level: -1 },
  ],
};
