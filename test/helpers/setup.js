const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

global.AssertionOnError = chai.AssertionError;
global.expect = chai.expect;
