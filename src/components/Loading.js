import React from 'react';

import './Loading.css';

const Loading = () => (
  <div className="Loading">
    <div className="Loading__backdrop" />
    <div className="Loading__container">
      <div className="Loading__bounce1" />
      <div className="Loading__bounce2" />
      <div className="Loading__bounce3" />
    </div>
  </div>
);


export default Loading;
