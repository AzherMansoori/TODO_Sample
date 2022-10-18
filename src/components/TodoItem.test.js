import React from 'react';
import {shallow} from 'enzyme';
import TodoItem from './TodoItem';
import renderer from 'react-test-renderer';

describe('TodoItem', () => {
  describe('Rendering', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <TodoItem item={{title: 'First Item'}} onRemove={mockFunction} />,
    );
    it('should match to snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('should call onRemove on click of remove text', () => {
      wrapper.dive().find('.remove-text').simulate('press');
      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
