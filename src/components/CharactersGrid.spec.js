import React from 'react';
import { shallow } from 'enzyme';

import CharactersGrid from './CharactersGrid';
import GridCharacter from './GridCharacter';

describe('CharactersGrid', () => {
  let component;
  let toggleBookmarkSpy;
  let characters;

  beforeEach(() => {
    toggleBookmarkSpy = jest.fn();
    characters = [{
      id: 101,
      name: 'Fictional character 1',
      image: 'http://fictional-character-1-url',
      isBookmark: false,
    }, {
      id: 102,
      name: 'Fictional character 2',
      image: 'http://fictional-character-2-url',
      isBookmark: false,
    }, {
      id: 103,
      name: 'Fictional character 3',
      image: 'http://fictional-character-3-url',
      isBookmark: false,
    }];

    component = shallow(<CharactersGrid characters={characters} onToggleBookmark={toggleBookmarkSpy} />)
  });

  it('should display all provided characters', () => {
    expect(component.getElement()).toMatchSnapshot();
  });

  it('should call the onToggleBookmark prop when a character is clicked', () => {
    const index = 0;
    const gridCharacterComponent = component.find(GridCharacter).at(index);

    gridCharacterComponent.dive().find('.GridCharacter__bookmark').simulate('click');

    expect(toggleBookmarkSpy).toHaveBeenCalledWith(characters[index].id)
  });
});
