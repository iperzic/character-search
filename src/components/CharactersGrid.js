import React from 'react';
import PropTypes from 'prop-types';

import './CharactersGrid.css';

import GridCharacter from './GridCharacter';

const CharactersGrid = ({ characters, onToggleBookmark }) => (
  <div className="CharactersGrid">
    {characters.map(c => (
      <GridCharacter
        key={c.id}
        name={c.name}
        image={c.image}
        isBookmark={c.isBookmark}
        onBookmarkClick={() => onToggleBookmark(c.id)}
      />
    ))}
  </div>
);

CharactersGrid.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isBookmark: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
};

export default CharactersGrid;
