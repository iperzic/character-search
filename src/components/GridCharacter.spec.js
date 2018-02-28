import React from 'react';
import { shallow } from 'enzyme';

import GridCharacter from './GridCharacter';

describe('GridCharacter', () => {
  let component;
  let onBookmarkSpy;
  let name;
  let image;
  let isBookmark;

  beforeEach(() => {
    onBookmarkSpy = jest.fn();
    name = 'Deadpool';
    image = 'http://some-deadpool-image';
    isBookmark = true;
    component = shallow(
      <GridCharacter
        name={name}
        image={image}
        isBookmark={isBookmark}
        onBookmarkClick={onBookmarkSpy}
      />);
  });

  describe('when the character is bookmarked', () => {
    it('should display that the character is bookmarked', () => {
      expect(component.getElement()).toMatchSnapshot();
    });
  });

  describe('when the character is not bookmarked', () => {
    it('should display that the character is not bookmarked', () => {
      component.setProps({isBookmark: false});

      expect(component.getElement()).toMatchSnapshot();
    });
  });

  describe('when bookmark icon is clicked', () => {
    it('should call the onClick prop if present', () => {
      component.find('.GridCharacter__bookmark').simulate('click');

      expect(onBookmarkSpy).toHaveBeenCalledTimes(1);
    });
  });
});
