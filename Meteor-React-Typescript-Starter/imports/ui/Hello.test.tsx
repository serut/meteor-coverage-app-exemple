import * as React from 'react';
import { expect} from 'chai';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

if (Meteor.isClient) {

  let Hello: any; /* TS2.9: typeof import('./Hello').default*/
  configure({ adapter: new Adapter() });

  before(async () => {
    const HelloImport = await import('./Hello');
    Hello = HelloImport.default;
  });

  describe('Hello', async () => {

    it('should count correctly', () => {
      const wrapper = shallow(<Hello />);
      const clickButton = wrapper.find('button');

      expect(clickButton).lengthOf(1, 'Cannot find button');
      expect(wrapper.state('counter')).equal(0);

      clickButton.simulate('click');
      expect(wrapper.state('counter')).equal(1);
    });

  });
}
