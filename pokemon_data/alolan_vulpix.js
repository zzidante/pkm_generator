module.exports = {
  name: 'alolan vulpix',
  pokedex: 37,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'alolan vulpix', level: 0, condition: false },
      {  evolutionStep: 2, form: 'alolan ninetails', level: false, condition: 'ice stone' },
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
  type: ['ice'],
  catchRate: 24.8,
  experienceYield: 60,
  genderRatio: [{m: 25}, {f: 75}],
  evYield: [
    { type: 'spd', value: 1 }
  ],
  abilities: [
    {name: 'snow cloak', hidden: false },
    {name: 'snow warning', hidden: true }
  ],
  height: 0.6,
  weight: 9.9,
  moves: [
    { name: 'powder snow', level: 1 },
    { name: 'tail whip', level: 4 },
    { name: 'roar', level: 7 },
    { name: 'baby-doll eyes', level: 9 },
    { name: 'ice shard', level: 10 },
    { name: 'confuse ray', level: 12 },
    { name: 'icy wind', level: 15 },
    { name: 'payback', level: 18 },
    { name: 'mist', level: 20 },
    { name: 'feint attack', level: 23 },
    { name: 'hex', level: 26 },
    { name: 'aurora beam', level: 28 },
    { name: 'extrasensory', level: 31 },
    { name: 'safeguard', level: 34 },
    { name: 'ice beam', level: 36 },
    { name: 'imprison', level: 39 },
    { name: 'blizzard', level: 42 },
    { name: 'grudge', level: 44 },
    { name: 'captivate', level: 47 },
    { name: 'sheer cold', level: 50 },
  ],
};
