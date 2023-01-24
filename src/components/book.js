import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
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
            <button type="button" className="btn" onClick={handleRemove}>
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
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
