import React from 'react';
import PropTypes from 'prop-types';

import './GridCharacter.css';

const GridCharacter = ({ name, image, isBookmark, onBookmarkClick }) => (
  <div className="GridCharacter">
    <img className="GridCharacter__image" src={image} alt={name} />
    <h2 className="GridCharacter__name" title={name}>{name}</h2>
    <span
      className={isBookmark ?
        'GridCharacter__bookmark bookmark--selected' :
        'GridCharacter__bookmark bookmark--not-selected'}
      onClick={onBookmarkClick}
    />
  </div>
);

GridCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
};

export default GridCharacter;
