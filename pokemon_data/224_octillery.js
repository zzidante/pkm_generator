module.exports = {
  name: 'octillery',
  pokedex: 224,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'remoraid', level: 0, condition: false },
      {  evolutionStep: 2, form: 'octillery', level: 25, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 75,
    atk: 105,
    def: 75,
    spAtk: 105,
    spDef: 75,
    spd: 45,
  },
  type: ['water'],
  catchRate: 9.8,
  experienceYield: 168,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'atk', value: 1 },
    { type: 'spAtk', value: 1 },
  ],
  abilities: [
    {name: 'suction cups', hidden: false },
    {name: 'sniper', hidden: false },
    {name: 'moody', hidden: true },
  ],
  height: 0.9,
  weight: 28.5,
  moves: [
    { name: 'octazooka', level: -1 },
    { name: 'octazooka', level: 1 },
    { name: 'gunk shot', level: 1 },
    { name: 'rock blast', level: 1 },
    { name: 'water gun', level: 1 },
    { name: 'constrict', level: 1 },
    { name: 'psybeam', level: 1 },
    { name: 'aurora beam', level: 1 },
    { name: 'constrict', level: 6 },
    { name: 'psybeam', level: 10 },
    { name: 'aurora beam', level: 14 },
    { name: 'bubblebeam', level: 18 },
    { name: 'focus energy', level: 22 },
    { name: 'wring out', level: 28 },
    { name: 'signal beam', level: 34 },
    { name: 'ice beam', level: 40 },
    { name: 'bullet seed', level: 46 },
    { name: 'hydro pump', level: 52 },
    { name: 'hyper beam', level: 58 },
    { name: 'soak', level: 64 },
  ],
};