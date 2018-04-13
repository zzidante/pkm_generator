module.exports = {
  name: 'persian',
  pokedex: 53,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'meowth', level: 0, condition: false },
      {  evolutionStep: 2, form: 'persian', level: 28, condition: false },
    ]
  },
  regional_variant: { type: 'alolan' },
  stats: {
    hp: 65,
    atk: 70,
    def: 60,
    spAtk: 65,
    spDef: 65,
    spd: 115,
  },
  type: ['normal'],
  catchRate: 11.8,
  experienceYield: 154,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 2 }
  ],
  abilities: [
    {name: 'limber', hidden: false },
    {name: 'technician', hidden: false },
    {name: 'unnerve', hidden: true }
  ],
  height: 1.0,
  weight: 32.0,
  moves: [
    { name: 'swift', level: 1 },
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
  ],
};
