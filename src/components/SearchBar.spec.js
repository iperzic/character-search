import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  let component;
  let queryChangeSpy;

  beforeEach(() => {
    queryChangeSpy = jest.fn();
    component = shallow(<SearchBar onQueryChange={queryChangeSpy} />);
  });

  it('should show an input for query', () => {
    expect(component.getElement()).toMatchSnapshot();
  });

  describe('when the input is changed', () => {
    it('should call the onQueryChange prop with the query', () => {
      const name = 'character name';
      const queryInput = component.find('.SearchBar__input');

      queryInput.simulate('change', {
        currentTarget: {
          value: name,
        },
      });

      expect(queryChangeSpy).toHaveBeenCalledWith({ currentTarget: { value: name } });
    });
  });
});
