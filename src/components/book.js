import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ category, title, author }) => (
  <>
    <div className="book">
      <div className="book-infos">
        <div>
          <div>{category}</div>
          <div>{title}</div>
          <div>{author}</div>
        </div>
        <div>
          <button typle="button" className="btn">
            Comment
          </button>
          <button typle="button" className="btn">
            Remove
          </button>
          <button typle="button" className="btn">
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
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
