module.exports = {
  name: 'murkrow',
  pokedex: 198,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'murkrow', level: 0, condition: false },
      {  evolutionStep: 2, form: 'honchkrow', level: false, condition: 'dusk stone' },
    ]
  },
  variant: false,
  stats: {
    hp: 60,
    atk: 85,
    def: 42,
    spAtk: 85,
    spDef: 42,
    spd: 91,
  },
  type: ['dark', 'flying'],
  catchRate: 3.9,
  experienceYield: 81,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'insomnia', hidden: false },
    {name: 'super luck', hidden: false },
    {name: 'prankster', hidden: true }
  ],
  height: 0.5,
  weight: 2.1,
  moves: [
    { name: 'peck', level: 1 },
    { name: 'astonish', level: 1 },
    { name: 'pursuit', level: 5 },
    { name: 'haze', level: 11 },
    { name: 'wing atack', level: 15 },
    { name: 'night shade', level: 21 },
    { name: 'assurance', level: 25 },
    { name: 'taunt', level: 31 },
    { name: 'feint attack', level: 35 },
    { name: 'mean look', level: 41 },
    { name: 'foul play', level: 45 },
    { name: 'tailwind', level: 50 },
    { name: 'sucker punch', level: 55 },
    { name: 'torment', level: 61 },
    { name: 'quash', level: 65 },
  ],
};