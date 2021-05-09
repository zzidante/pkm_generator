module.exports = {
  name: 'clefable',
  pokedex: 36,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'cleffa', level: 0, condition: false },
      {  evolutionStep: 2, form: 'clefairy', level: false, condition: 'friendship' },
      {  evolutionStep: 3, form: 'clefable', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 95,
    atk: 70,
    def: 73,
    spAtk: 95,
    spDef: 90,
    spd: 60,
  },
  type: ['fairy'],
  catchRate: 3.3,
  experienceYield: 217,
  genderRatio: [{m: 25}, {f: 75}],
  evYield: [
    { type: 'hp', value: 3 }
  ],
  abilities: [
    {name: 'cute charm', hidden: false },
    {name: 'magic guard', hidden: false },
    {name: 'unaware', hidden: true }
  ],
  height: 1.3,
  weight: 40.0,
  moves: [
    { name: 'spotlight', level: 1 },
    { name: 'disarming voice', level: 1 },
    { name: 'sing', level: 1 },
    { name: 'double slap', level: 1 },
    { name: 'minimize', level: 1 },
    { name: 'metronome', level: 1 },
  ],
  wild_items: {
    common: ['leppa_berry'],
    rare: ['moon_stone', 'comet_shard'],
    guarantee: []
  }
};
