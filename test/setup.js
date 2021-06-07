console.log('Chai assert set globally');
let chai = require('chai');
let sinon = require('sinon').createSandbox();
global.assert = chai.assert;
global.sinon = sinon;
