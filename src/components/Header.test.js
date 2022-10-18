import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';
import renderer from 'react-test-renderer';

describe('Header', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Header />);
      expect(tree).toMatchSnapshot();
    });
    it('should match to snapshot', () => {
      const component = shallow(<Header title="test title" />);
      expect(component).toMatchSnapshot();
    });
  });
});
