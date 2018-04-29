// Tests for the behavior of the links collection
//

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import usefullFunction from './hey'

describe('fake testing the back', function () {
	it('dumb test', function () {
	  assert.isTrue(true, 'Should works')
	});
	it('should import file', function () {
		assert.isFunction(usefullFunction, 'Should be a function')
	});
});
