module.exports = {
  name: 'weedle',
  pokedex: 13,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'weedle', level: 0, condition: false },
      {  evolutionStep: 2, form: 'kakuna', level: 7, condition: false },
      {  evolutionStep: 3, form: 'beedrill', level: 10, condition: false },
    ]
  },
  variant: false,
  stats: {
    hp: 40,
    atk: 35,
    def: 30,
    spAtk: 20,
    spDef: 20,
    spd: 50,
  },
  type: ['bug', 'poison'],
  catchRate: 33.3,
  experienceYield: 39,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spd', value: 1 },
  ],
  abilities: [
    {name: 'shield dust', hidden: false },
    {name: 'run away', hidden: true },
  ],
  height: 0.3,
  weight: 3.2,
  moves: [
    { name: 'poison sting', level: 1 },
    { name: 'string shot', level: 1 },
    { name: 'bug bite', level: 9 },
  ],
};