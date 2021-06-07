let generatePokemonToJsonFile = require('../../../../calculators/components/generate_pokemon_to_json_file.js');

describe('calculators/components/generate_pokemon_to_json_file.js', function () {
  describe('pure()', function () {
    it('file overwrite is true; returns generated pokemon stats', function () {
      const derivedNewPokemon = { name: 'tName', level: 99, nature: { name: 'tNatureName' }}
      const directoryPrefix = 'tDirectory';
      // stubs
      const [
        generateNewPokemonSpy,
        generateSHA1Spy,
        pathSpy,
        fileShouldBeOverwrittenSpy,
        writeStreamToJsonSpy,
        loggerSpy
      ] = [
        sinon.stub().returns(derivedNewPokemon),
        sinon.stub().returns('SHA1'),
        { join: sinon.stub().returns('PATH') },
        sinon.stub().returns(true),
        sinon.stub().returns(null),
        sinon.stub().returns(null),
      ];

      // call
      const result = generatePokemonToJsonFile.pure(
        generateNewPokemonSpy,
        generateSHA1Spy,
        pathSpy,
        directoryPrefix,
        fileShouldBeOverwrittenSpy,
        writeStreamToJsonSpy,
        loggerSpy
      )(['testPokemonName', 1]);

      sinon.assert.calledWith(generateNewPokemonSpy, ['testPokemonName', 1]);
      sinon.assert.calledWith(generateSHA1Spy, derivedNewPokemon);
      sinon.assert.calledWith(pathSpy.join, 'tDirectory', 'generated_pokemon', 'tName_99_tNatureName_SHA1.json');
      sinon.assert.calledWith(fileShouldBeOverwrittenSpy, 'PATH');
      sinon.assert.calledWith(loggerSpy.getCall(0), { message: 'tName_99_tNatureName_SHA1.json being written...'});
      sinon.assert.calledWith(writeStreamToJsonSpy, {fullyQualifiedPath: 'PATH', dataObject: derivedNewPokemon});
      sinon.assert.calledWith(loggerSpy.getCall(1), { message: 'tName_99_tNatureName_SHA1.json done.'});

      assert.deepEqual(result, { name: 'tName', level: 99, nature: { name: 'tNatureName' }});

      sinon.restore();
    });
    it('file overwrite is false; returns generated pokemon stats', function () {
      const derivedNewPokemon = { name: 'tName', level: 99, nature: { name: 'tNatureName' }}
      const directoryPrefix = 'tDirectory';
      // stubs
      const [
        generateNewPokemonSpy,
        generateSHA1Spy,
        pathSpy,
        fileShouldBeOverwrittenSpy,
        writeStreamToJsonSpy,
        loggerSpy
      ] = [
        sinon.stub().returns(derivedNewPokemon),
        sinon.stub().returns('SHA1'),
        { join: sinon.stub().returns('PATH') },
        sinon.stub().returns(false),
        sinon.stub().returns(null),
        sinon.stub().returns(null),
      ];

      // call
      const result = generatePokemonToJsonFile.pure(
        generateNewPokemonSpy,
        generateSHA1Spy,
        pathSpy,
        directoryPrefix,
        fileShouldBeOverwrittenSpy,
        writeStreamToJsonSpy,
        loggerSpy
      )(['testPokemonName', 1]);

      sinon.assert.calledWith(generateNewPokemonSpy, ['testPokemonName', 1]);
      sinon.assert.calledWith(generateSHA1Spy, derivedNewPokemon);
      sinon.assert.calledWith(pathSpy.join, 'tDirectory', 'generated_pokemon', 'tName_99_tNatureName_SHA1.json');
      sinon.assert.calledWith(fileShouldBeOverwrittenSpy, 'PATH');
      sinon.assert.notCalled(writeStreamToJsonSpy);
      sinon.assert.calledWith(loggerSpy, { message: 'tName_99_tNatureName_SHA1.json should not be overwritten, skipped.'});

      assert.deepEqual(result, { name: 'tName', level: 99, nature: { name: 'tNatureName' }});

      sinon.restore();
    });
  });
});
