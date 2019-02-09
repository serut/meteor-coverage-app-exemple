import * as React from 'react';
import { expect} from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


if (Meteor.isClient) {

  import Info from './Info';
  configure({ adapter: new Adapter() });

  describe('Info', async () => {

    it('should render correctly', () => {
      const wrapper = shallow(<Info />);
      expect(wrapper).lengthOf(1);
    });

  });
}
