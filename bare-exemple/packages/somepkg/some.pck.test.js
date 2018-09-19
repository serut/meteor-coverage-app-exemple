import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
import Mock from "./mock.tests.js";

// Here is 1 client test
describe('my package', function () {
  it('run some mocha test', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
    Mock.noop();
    chai.assert.equal(true, true);
  });
});
