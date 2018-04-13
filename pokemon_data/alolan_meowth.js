module.exports = {
  name: 'alolan meowth',
  pokedex: 52,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'alolan meowth', level: 0, condition: false },
      {  evolutionStep: 2, form: 'alolan persian', level: false, condition: 'friendship' },
    ]
  },
  regional_variant: { type: 'classic' },
  stats: {
    hp: 40,
    atk: 35,
    def: 35,
    spAtk: 50,
    spDef: 40,
    spd: 90,
  },
  type: ['dark'],
  catchRate: 33.3,
  experienceYield: 58,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 }
  ],
  abilities: [
    {name: 'pickup', hidden: false },
    {name: 'technician', hidden: false },
    {name: 'rattled', hidden: true }
  ],
  height: 0.4,
  weight: 4.2,
  moves: [
    { name: 'scratch', level: 1 },
    { name: 'growl', level: 1 },
    { name: 'bite', level: 6 },
    { name: 'fake out', level: 9 },
    { name: 'fury swipes', level: 14 },
    { name: 'screech', level: 17 },
    { name: 'feint attack', level: 22 },
    { name: 'taunt', level: 25 },
    { name: 'pay day', level: 30 },
    { name: 'slash', level: 33 },
    { name: 'nasty plot', level: 38 },
    { name: 'assurance', level: 41 },
    { name: 'captivate', level: 46 },
    { name: 'night slash', level: 49 },
    { name: 'feint', level: 50 },
    { name: 'dark pulse', level: 50 },
  ],
};
