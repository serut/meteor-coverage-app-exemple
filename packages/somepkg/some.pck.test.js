import { chai } from 'meteor/practicalmeteor:chai';
// Here is 1 client test
describe('my package', function () {
  it('run some mocha test', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
    chai.assert.equal(true, true);
  });
});
