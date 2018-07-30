module.exports = {
  name: 'slowpoke',
  pokedex: 79,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'slowpoke', level: 0, condition: false },
      {  evolutionStep: 2, form: 'slowbro', level: 37, condition: 'fire stone' },
      {  evolutionStep: 2, form: 'slowking', level: false, condition: ['trade', 'king\'s rock'] },
    ]
  },
  regional_variant: { type: false },  
  stats: {
    hp: 90,
    atk: 65,
    def: 65,
    spAtk: 40,
    spDef: 40,
    spd: 15,
  },
  type: ['water', 'psychic'],
  catchRate: 24.8,
  experienceYield: 63,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'hp', value: 1 }
  ],
  abilities: [
    {name: 'oblivious', hidden: false },
    {name: 'own tempo', hidden: false },
    {name: 'regenerator', hidden: true }
  ],
  height: 1.2,
  weight: 36.0,
  moves: [
    { name: 'curse', level: 1 },
    { name: 'yawn', level: 1 },
    { name: 'tackle', level: 1 },
    { name: 'growl', level: 5 },
    { name: 'water gun', level: 9 },
    { name: 'confusion', level: 14 },
    { name: 'disable', level: 19 },
    { name: 'headbutt', level: 23 },
    { name: 'water pulse', level: 28 },
    { name: 'zen headbutt', level: 32 },
    { name: 'slack off', level: 36 },
    { name: 'amnesia', level: 41 },
    { name: 'psychic', level: 45 },
    { name: 'rain dance', level: 49 },
    { name: 'psych up', level: 54 },
    { name: 'heal pulse', level: 58 },
  ],
};
