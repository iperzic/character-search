import React from 'react';
import PropTypes from 'prop-types';

import './GridCharacter.css';

const GridCharacter = ({ name, image, isBookmark, onBookmarkClick }) => (
  <div className="GridCharacter">
    <div className="GridCharacter__image">{image}</div>
    <div className="GridCharacter__name"><b>{name}</b></div>
    <div className="GridCharacter__bookmark" onClick={onBookmarkClick}>{isBookmark.toString()}</div>
  </div>
);

GridCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
};

export default GridCharacter;
