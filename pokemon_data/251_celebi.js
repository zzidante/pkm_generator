module.exports = {
  name: 'celebi',
  pokedex: 251,
  evolution: {
    hasEvolutions: false,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 1,
    details: [
      {  evolutionStep: 1, form: 'celebi', level: 0, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 100,
    atk: 100,
    def: 100,
    spAtk: 100,
    spDef: 100,
    spd: 100,
  },
  type: ['psychic', 'grass'],
  catchRate: 5.9,
  experienceYield: 270,
  genderRatio: [false],
  evYield: [
    { type: 'spDef', value: 3 },
  ],
  abilities: [
    {name: 'natural cure', hidden: false },
  ],
  height: 0.6,
  weight: 5.0,
  moves: [
    { name: 'leech seed', level: 1 },
    { name: 'confusion', level: 1 },
    { name: 'recover', level: 1 },
    { name: 'heal bell', level: 1 },
    { name: 'safeguard', level: 10 },
    { name: 'magical leaf', level: 19 },
    { name: 'ancient power', level: 28 },
    { name: 'baton pass', level: 37 },
    { name: 'natural gift', level: 46 },
    { name: 'heal block', level: 55 },
    { name: 'future sight', level: 64 },
    { name: 'healing wish', level: 73 },
    { name: 'leaf storm', level: 82 },
    { name: 'perish song', level: 91 },
  ],
};