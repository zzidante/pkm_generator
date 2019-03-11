module.exports = {
  name: 'mew',
  pokedex: 151,
  evolution: {
    hasEvolutions: false,
    currentEvolutionStep: 1,
    maxEvolutionSteps: 1,
    details: [
      {  evolutionStep: 1, form: 'mew', level: 0, condition: false },
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
  type: ['psychic'],
  catchRate: 5.9,
  experienceYield: 270,
  genderRatio: [{m: false}, {f: false}],
  evYield: [
    { type: 'hp', value: 3 },
  ],
  abilities: [
    {name: 'synchronize', hidden: false },
  ],
  height: 0.4,
  weight: 4.0,
  moves: [
    { name: 'pound', level: 1 },
    { name: 'reflect', level: 1 },
    { name: 'transform', level: 1 },
    { name: 'mega punch', level: 10 },
    { name: 'metronome', level: 20 },
    { name: 'psychic', level: 30 },
    { name: 'barrier', level: 40 },
    { name: 'ancient power', level: 50 },
    { name: 'amnesia', level: 60 },
    { name: 'me first', level: 70 },
    { name: 'baton pass', level: 80 },
    { name: 'nasty plot', level: 90 },
    { name: 'aura sphere', level: 100 },
  ],
};