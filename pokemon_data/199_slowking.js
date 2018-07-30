module.exports = {
  name: 'slowking',
  pokedex: 199,
  evolution: {
    hasEvolutions: true,
    currentEvolutionStep: 2,
    maxEvolutionSteps: 2,
    details: [
      {  evolutionStep: 1, form: 'slowpoke', level: 0, condition: false },
      {  evolutionStep: 2, form: 'slowbro', level: 37, condition: 'fire stone' },
      {  evolutionStep: 2, form: 'slowking', level: false, condition: ['trade', 'king\'s rock'] },
    ]
  },
  regional_variant: { type: false },  
  stats: {
    hp: 95,
    atk: 75,
    def: 80,
    spAtk: 100,
    spDef: 110,
    spd: 30,
  },
  type: ['water', 'psychic'],
  catchRate: 9.2,
  experienceYield: 172,
  genderRatio: [{m: 50}, {f: 50}],
  evYield: [
    { type: 'spdef', value: 3 }
  ],
  abilities: [
    {name: 'oblivious', hidden: false },
    {name: 'own tempo', hidden: false },
    {name: 'regenerator', hidden: true }
  ],
  height: 2.0,
  weight: 79.5,
  moves: [
    { name: 'heal pulse', level: 1 },
    { name: 'power gem', level: 1 },
    { name: 'hidden power', level: 1 },
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
    { name: 'nasty plot', level: 36 },
    { name: 'swagger', level: 43 },
    { name: 'psychic', level: 49 },
    { name: 'trump card', level: 55 },
    { name: 'psych up', level: 62 },
    { name: 'heal pulse', level: 68 },
  ],
};
