module.exports = {
  name: 'ho-oh',
  pokedex: 250,
  evolution: {
    hasEvolutions: false,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 1,
    details: [
      {  evolutionStep: 1, form: 'ho-oh', level: 0, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 106,
    atk: 130,
    def: 90,
    spAtk: 110,
    spDef: 154,
    spd: 90,
  },
  type: ['fire', 'flying'],
  catchRate: 0.4,
  experienceYield: 306,
  genderRatio: [false],
  evYield: [
    { type: 'spDef', value: 3 },
  ],
  abilities: [
    {name: 'pressure', hidden: false },
    {name: 'regenerator', hidden: true },
  ],
  height: 3.8,
  weight: 199.0,
  moves: [
    { name: 'whirlwind', level: 1 },
    { name: 'weather ball', level: 1 },
    { name: 'gust', level: 9 },
    { name: 'brave bird', level: 15 },
    { name: 'extrasensory', level: 23 },
    { name: 'sunny day', level: 29 },
    { name: 'fire blast', level: 37 },
    { name: 'sacred fire', level: 43 },
    { name: 'punishment', level: 50 },
    { name: 'ancient power', level: 57 },
    { name: 'safeguard', level: 65 },
    { name: 'recover', level: 71 },
    { name: 'future sight', level: 79 },
    { name: 'natural gift', level: 85 },
    { name: 'calm mind', level: 93 },
    { name: 'sky attack', level: 99 },
  ],
};