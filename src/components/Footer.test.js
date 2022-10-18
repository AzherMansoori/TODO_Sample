import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe('TodoItem', () => {
  describe('Rendering', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Footer onAddClick={mockFunction} />);
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should call onAddClick on click of add button', () => {
      wrapper.dive().find('#add-button').simulate('press');
      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
