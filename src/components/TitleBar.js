import React from 'react';
import PropTypes from 'prop-types';

import './TitleBar.css';

const TitleBar = ({ text }) => (
  <div className="TitleBar">
    <b>{text}</b>
  </div>
);

TitleBar.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleBar;
