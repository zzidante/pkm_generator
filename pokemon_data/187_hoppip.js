module.exports = {
  name: 'hoppip',
  pokedex: 187,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'hoppip', level: 0, condition: false },
      {  evolutionStep: 2, form: 'skiploom', level: 18, condition: false },
      {  evolutionStep: 3, form: 'jumpluff', level: 27, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 35,
    atk: 35,
    def: 40,
    spAtk: 35,
    spDef: 55,
    spd: 50,
  },
  type: ['grass', 'flying'],
  catchRate: 33.3,
  experienceYield: 50,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spDef', value: 1 },
  ],
  abilities: [
    {name: 'chlorophyll', hidden: false },
    {name: 'leaf guard', hidden: false },
    {name: 'infiltrator', hidden: true }
  ],
  height: 0.4,
  weight: 0.5,
  moves: [
    { name: 'absorb', level: 1 },
    { name: 'splash', level: 1 },
    { name: 'synthesis', level: 4 },
    { name: 'tail whip', level: 6 },
    { name: 'tackle', level: 8 },
    { name: 'fairy wind', level: 10 },
    { name: 'poison powder', level: 12 },
    { name: 'stun spore', level: 14 },
    { name: 'sleep powder', level: 16 },
    { name: 'bullet seed', level: 19 },
    { name: 'leech seed', level: 22 },
    { name: 'mega drain', level: 25 },
    { name: 'acrobatics', level: 28 },
    { name: 'rage powder', level: 31 },
    { name: 'cotton spore', level: 34 },
    { name: 'u-turn', level: 37 },
    { name: 'worry seed', level: 40 },
    { name: 'giga drain', level: 43 },
    { name: 'bounce', level: 46 },
    { name: 'memento', level: 49 },
  ],
};