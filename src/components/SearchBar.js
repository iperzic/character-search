import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

const SearchBar = ({ onQueryChange }) => (
  <div className="SearchBar">
    <input type="search" placeholder="Search Characters" onChange={onQueryChange} />
  </div>
);

SearchBar.propTypes = {
  onQueryChange: PropTypes.func.isRequired,
};

export default SearchBar;
