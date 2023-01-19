import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <div className="book">
      <div className="book-infos">
        <div>
          <div>{title}</div>
          <div>{author}</div>
        </div>
        <div>
          <button type="button" className="btn">
            Comment
          </button>
          <button type="button" className="btn">
            Remove
          </button>
          <button type="button" className="btn">
            Edit
          </button>
        </div>
      </div>

      <div className="book-prog">Book progress</div>
      <div className="book-update">book-update</div>
    </div>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
