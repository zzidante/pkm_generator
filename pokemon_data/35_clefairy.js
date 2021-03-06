module.exports = {
  name: 'clefairy',
  pokedex: 35,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'cleffa', level: 0, condition: false },
      {  evolutionStep: 2, form: 'clefairy', level: false, condition: 'friendship' },
      {  evolutionStep: 3, form: 'clefable', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 70,
    atk: 45,
    def: 48,
    spAtk: 60,
    spDef: 65,
    spd: 35,
  },
  type: ['fairy'],
  catchRate: 19.6,
  experienceYield: 113,
  genderRatio: [{m: 25}, {f: 75}],
  evYield: [
    { type: 'hp', value: 2 }
  ],
  abilities: [
    {name: 'cute charm', hidden: false },
    {name: 'magic guard', hidden: false },
    {name: 'friend guard', hidden: true }
  ],
  height: 0.6,
  weight: 7.5,
  moves: [
    { name: 'spotlight', level: 1 },
    { name: 'disarming voice', level: 1 },
    { name: 'pound', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'encore', level: 1 },
    { name: 'sing', level: 7 },
    { name: 'double slap', level: 10 },
    { name: 'defence curl', level: 13 },
    { name: 'follow me', level: 16 },
    { name: 'bestow', level: 19 },
    { name: 'wake-up slap', level: 22 },
    { name: 'minimize', level: 25 },
    { name: 'stored power', level: 28 },
    { name: 'metronome', level: 31 },
    { name: 'cosmic power', level: 34 },
    { name: 'lucky chant', level: 37 },
    { name: 'body slam', level: 40 },
    { name: 'moonlight', level: 43 },
    { name: 'moonblast', level: 46 },
    { name: 'gravity', level: 49 },
    { name: 'meteor mash', level: 50 },
    { name: 'healing wish', level: 55 },
    { name: 'after you', level: 58 },
  ],
  wild_items: {
    common: ['leppa_berry'],
    rare: ['moon_stone', 'comet_shard'],
    guarantee: []
  }
};
