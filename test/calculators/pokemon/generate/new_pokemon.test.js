let newPokemon = require('../../../../calculators/generate/new_pokemon.js');

describe('calculators/generate/new_pokemon.js', function () {
  describe('pure()', function () {
    it('calls its dependencies & generates a new pokemon', function () {
      const pokemonData = {
        testPokemonName: {
          stats: {
            hp: 10,
            atk: 11,
            def: 12,
            spAtk: 13,
            spDef: 14,
            spd: 15,
          },
          moves: []
      }
    };
      // stubs
      const [
        generatePokemonSpy,
        getRandomMovesSpy,
      ] = [
        sinon.stub().returns('generatedPokemon'),
        sinon.stub().returns('returnedPokemon'),
      ];

      // call
      const result = newPokemon.pure(
        generatePokemonSpy,
        pokemonData,
        getRandomMovesSpy
      )(['testPokemonName', 1]);

      sinon.assert.calledWith(generatePokemonSpy, ["testPokemonName", 1, 10, 11, 12, 13, 14, 15]);
      sinon.assert.calledWith(getRandomMovesSpy, 'generatedPokemon', pokemonData.testPokemonName.moves);

      assert.deepEqual(result, 'returnedPokemon');

      sinon.restore();
    });
  });
});
