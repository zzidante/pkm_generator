module.exports = {
  name: 'alolan golem',
  pokedex: 76,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'alolan geodude', level: 0, condition: false },
      {  evolutionStep: 2, form: 'alolan graveler', level: 25, condition: false },
      {  evolutionStep: 3, form: 'alolan golem', level: false, condition: 'trade' },
    ]
  },
  regional_variant: { type: 'classic' },  
  stats: {
    hp: 80,
    atk: 120,
    def: 130,
    spAtk: 55,
    spDef: 65,
    spd: 45,
  },
  type: ['rock', 'electric'],
  catchRate: 5.9,
  experienceYield: 223,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 3 }
  ],
  abilities: [
    {name: 'magnet pull', hidden: false },
    {name: 'sturdy', hidden: false },
    {name: 'galvanize', hidden: true }
  ],
  height: 1.7,
  weight: 316.0,
  moves: [
    { name: 'heavy slam', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'defense curl', level: 1 },
    { name: 'charge', level: 1 },
    { name: 'rock polish', level: 1 },
    { name: 'charge', level: 4 },
    { name: 'rock polish', level: 6 },
    { name: 'steamroller', level: 10 },
    { name: 'spark', level: 12 },
    { name: 'rock throw', level: 16 },
    { name: 'smack down', level: 18 },
    { name: 'thunder punch', level: 22 },
    { name: 'self-destruct', level: 24 },
    { name: 'stealth rock', level: 30 },
    { name: 'rock blast', level: 34 },
    { name: 'discharge', level: 40 },
    { name: 'explosion', level: 44 },
    { name: 'double-edge', level: 50 },
    { name: 'stone edge', level: 54 },
    { name: 'heavy slam', level: 54 },
  ],
};
