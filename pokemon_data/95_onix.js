module.exports = {
  name: 'onix',
  pokedex: 95,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'onix', level: 0, condition: false },
      {  evolutionStep: 2, form: 'steelix', level: false, condition: ['trade', 'metal coat'] },
    ]
  },
  variant: false,
  stats: {
    hp: 35,
    atk: 45,
    def: 160,
    spAtk: 30,
    spDef: 45,
    spd: 70,
  },
  type: ['rock', 'ground'],
  catchRate: 5.9,
  experienceYield: 77,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'def', value: 1 },
  ],
  abilities: [
    {name: 'rock head', hidden: false },
    {name: 'sturdy', hidden: false },
    {name: 'weak armor', hidden: true },
  ],
  height: 8.8,
  weight: 210.0,
  moves: [
    { name: 'mud sport', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'harden', level: 1 },
    { name: 'bind', level: 1 },
    { name: 'curse', level: 4 },
    { name: 'rock throw', level: 7 },
    { name: 'rock tomb', level: 10 },
    { name: 'rage', level: 13 },
    { name: 'stealth rock', level: 16 },
    { name: 'rock polish', level: 19 },
    { name: 'gyro ball', level: 20 },
    { name: 'smack down', level: 22 },
    { name: 'dragon breath', level: 25 },
    { name: 'slam', level: 28 },
    { name: 'screech', level: 31 },
    { name: 'rock slide', level: 34 },
    { name: 'sand tomb', level: 37 },
    { name: 'iron tail', level: 40 },
    { name: 'dig', level: 43 },
    { name: 'stone edge', level: 46 },
    { name: 'double-edge', level: 49 },
    { name: 'sandstorm', level: 55 },
  ],
};