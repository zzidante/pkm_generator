
module.exports = {
  name: 'alolan persian',
  pokedex: 53,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'alolan meowth', level: 0, condition: false },
      {  evolutionStep: 2, form: 'alolan persian', level: 28, condition: 'friendship' },
    ]
  },
  regional_variant: { type: 'classic' },
  stats: {
    hp: 65,
    atk: 60,
    def: 60,
    spAtk: 75,
    spDef: 65,
    spd: 115,
  },
  type: ['dark'],
  catchRate: 11.8,
  experienceYield: 154,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 2 }
  ],
  abilities: [
    {name: 'fur coat', hidden: false },
    {name: 'technician', hidden: false },
    {name: 'rattled', hidden: true }
  ],
  height: 1.1,
  weight: 33.0,
  moves: [
    { name: 'swift', level: 1 },
    { name: 'quash', level: 1 },
    { name: 'play rough', level: 1 },
    { name: 'switcheroo', level: 1 },
    { name: 'scratch', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'bite', level: 1 },
    { name: 'fake out', level: 1 },
    { name: 'swift', level: -1 },
    { name: 'bite', level: 6 },
    { name: 'fake out', level: 9 },
    { name: 'fury swipes', level: 14 },
    { name: 'screech', level: 17 },
    { name: 'feint attack', level: 22 },
    { name: 'taunt', level: 25 },
    { name: 'power gem', level: 32 },
    { name: 'slash', level: 37 },
    { name: 'nasty plot', level: 44 },
    { name: 'assurance', level: 49 },
    { name: 'captivate', level: 56 },
    { name: 'night slash', level: 61 },
    { name: 'feint', level: 65 },
    { name: 'dark pulse', level: 69 },
  ],
};
