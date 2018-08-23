module.exports = {
  name: 'wigglytuff',
  pokedex: 40,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'igglybuff', level: 0, condition: false },
      {  evolutionStep: 1, form: 'jigglypuff', level: false, condition: 'friendship' },
      {  evolutionStep: 2, form: 'wigglytuff', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 140,
    atk: 70,
    def: 45,
    spAtk: 85,
    spDef: 50,
    spd: 45,
  },
  type: ['normal', 'fairy'],
  catchRate: 6.5,
  experienceYield: 196,
  genderRatio: [{m: 25}, {f: 75}],
  evYield: [
    { type: 'hp', value: 3 }
  ],
  abilities: [
    {name: 'cute charm', hidden: false },
    {name: 'competitive', hidden: false },
    {name: 'frisk', hidden: true }
  ],
  height: 1.0,
  weight: 12.0,
  moves: [
    { name: 'double-edge', level: 1 },
    { name: 'play rough', level: 1 },
    { name: 'sing', level: 1 },
    { name: 'defence curl', level: 1 },
    { name: 'disable', level: 1 },
    { name: 'double slap', level: 1 },
  ],
};
