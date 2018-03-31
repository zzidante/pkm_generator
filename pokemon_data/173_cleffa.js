module.exports = {
  name: 'cleffa',
  pokedex: 173,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'cleffa', level: 0, condition: false },
      {  evolutionStep: 2, form: 'clefairy', level: false, condition: 'friendship' },
      {  evolutionStep: 3, form: 'clefable', level: false, condition: 'moon stone' },
    ]
  },
  regional_variant: { type: false },
  stats: {
    hp: 50,
    atk: 25,
    def: 28,
    spAtk: 45,
    spDef: 55,
    spd: 15,
  },
  type: ['fairy'],
  catchRate: 19.6,
  experienceYield: 44,
  genderRatio: [{m: 25}, {f: 75}],
  evYield: [
    { type: 'hp', value: 1 }
  ],
  abilities: [
    {name: 'cute charm', hidden: false },
    {name: 'magic guard', hidden: false },
    {name: 'friend guard', hidden: true }
  ],
  height: 0.3,
  weight: 3.0,
  moves: [
    { name: 'pound', level: 1 },
    { name: 'charm', level: 1 },
    { name: 'encore', level: 4 },
    { name: 'sing', level: 7 },
    { name: 'sweet kiss', level: 10 },
    { name: 'copycat', level: 13 },
    { name: 'magical leaf', level: 16 },
  ],
};
