import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

const Pagination = ({ metadata, onPageChange }) => {
  const defaultOffset = 20;
  const isLastPage = metadata.offset + defaultOffset >= metadata.total;
  const isFirstPage = metadata.offset - defaultOffset < 0;
  return (
    <div className="Pagination">
      <div className={`Pagination__arrow arrow--previous${isFirstPage ? ' arrow--disabled' : ''}`}
           onClick={() => !isFirstPage && onPageChange(metadata.offset - defaultOffset)}
           title="Previous Page"
      />
      <div className={`Pagination__arrow arrow--next${isLastPage ? ' arrow--disabled' : ''}`}
           onClick={() => !isLastPage && onPageChange(metadata.offset + defaultOffset)}
           title="Next Page"
      />
    </div>
  );
};

Pagination.propTypes = {
  metadata: PropTypes.shape({
    count: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
