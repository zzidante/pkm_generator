module.exports = {
  name: 'jigglypuff',
  pokedex: 39,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'igglybuff', level: 0, condition: false },
      {  evolutionStep: 1, form: 'jigglypuff', level: false, condition: 'friendship' },
      {  evolutionStep: 2, form: 'wigglytuff', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 115,
    atk: 45,
    def: 20,
    spAtk: 45,
    spDef: 25,
    spd: 20,
  },
  type: ['normal', 'fairy'],
  catchRate: 22.2,
  experienceYield: 95,
  genderRatio: [{m: 25}, {f: 75}],
  evYield: [
    { type: 'hp', value: 2 }
  ],
  abilities: [
    {name: 'cute charm', hidden: false },
    {name: 'competitive', hidden: false },
    {name: 'friend guard', hidden: true }
  ],
  height: 0.5,
  weight: 5.5,
  moves: [
    { name: 'sing', level: 1 },
    { name: 'defence curl', level: 3 },
    { name: 'pound', level: 5 },
    { name: 'play nice', level: 9 },
    { name: 'disarming voice', level: 11 },
    { name: 'disable', level: 14 },
    { name: 'double slap', level: 17 },
    { name: 'rollout', level: 20 },
    { name: 'round', level: 22 },
    { name: 'stockpile', level: 25 },
    { name: 'swallow', level: 25 },
    { name: 'spit up', level: 25 },
    { name: 'wake-up slap', level: 27 },
    { name: 'rest', level: 30 },
    { name: 'body slam', level: 32 },
    { name: 'gyro ball', level: 35 },
    { name: 'mimic', level: 38 },
    { name: 'hyper voice', level: 41 },
    { name: 'double-edge', level: 45 },
  ],
};
