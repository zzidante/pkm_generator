module.exports = {
  name: 'piloswine',
  pokedex: 221,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'swinub', level: 0, condition: false },
      {  evolutionStep: 2, form: 'piloswine', level: 33, condition: false },
      {  evolutionStep: 3, form: 'mamoswine', level: true, condition: 'ancient power' },
    ]
  },
  variant: false,
  stats: {
    hp: 100,
    atk: 100,
    def: 80,
    spAtk: 60,
    spDef: 60,
    spd: 50,
  },
  type: ['ice', 'ground'],
  catchRate: 9.8,
  experienceYield: 158,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'hp', value: 1 },
    { type: 'atk', value: 1 },
  ],
  abilities: [
    {name: 'oblivious', hidden: false },
    {name: 'snow cloak', hidden: false },
    {name: 'thick fat', hidden: true },
  ],
  height: 1.1,
  weight: 55.8,
  moves: [
    { name: 'fury attack', level: -1 },
    { name: 'fury attack', level: 1 },
    { name: 'ancient power', level: 1 },
    { name: 'peck', level: 1 },
    { name: 'odor sleuth', level: 1 },
    { name: 'mud sport', level: 1 },
    { name: 'powder snow', level: 1 },
    { name: 'mud sport', level: 5 },
    { name: 'powder snow', level: 8 },
    { name: 'mud-slap', level: 11 },
    { name: 'endure', level: 14 },
    { name: 'mud bomb', level: 18 },
    { name: 'icy wind', level: 21 },
    { name: 'ice fang', level: 24 },
    { name: 'take down', level: 28 },
    { name: 'mist', level: 37 },
    { name: 'thrash', level: 41 },
    { name: 'earthquake', level: 46 },
    { name: 'blizzard', level: 52 },
    { name: 'amnesia', level: 58 },
  ],
};