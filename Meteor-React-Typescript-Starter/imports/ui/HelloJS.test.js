import * as React from 'react';
import { expect} from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


if (Meteor.isClient) {

  import Hello from './Hello';
  configure({ adapter: new Adapter() });

  describe('HelloJS', async () => {

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
