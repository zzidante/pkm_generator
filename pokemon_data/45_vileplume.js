module.exports = {
  name: 'vileplume',
  pokedex: 45,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 3,
    maxEvolutionSteps: 3,
    details: [
      {  evolutionStep: 1, form: 'oddish', level: 0, condition: false },
      {  evolutionStep: 2, form: 'gloom', level: 21, condition: false },
      {  evolutionStep: 3, form: 'vileplume', level: false, condition: 'leaf stone' },
      {  evolutionStep: 3, form: 'bellossom', level: false, condition: 'sun stone' },
    ]
  },
  stats: {
    hp: 75,
    atk: 80,
    def: 85,
    spAtk: 110,
    spDef: 90,
    spd: 50,
  },
  type: ['grass', 'poison'],
  catchRate: 5.9,
  experienceYield: 221,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spatk', value: 3 }
  ],
  abilities: [
    {name: 'chlorophyll', hidden: false },
    {name: 'effect spore', hidden: true }
  ],
  height: 1.2,
  weight: 18.6,
  moves: [
    { name: 'mega drain', level: 1 },
    { name: 'aromatherapy', level: 1 },
    { name: 'poison powder', level: 1 },
    { name: 'stun spore', level: 1 },
    { name: 'petal blizzard', level: 49 },
    { name: 'petal dance', level: 59 },
    { name: 'solar beam', level: 69 },
  ],
};
