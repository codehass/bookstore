import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="book">
        <div className="book-infos">
          <div>
            <div className="category">{category}</div>
            <div className="title">{title}</div>
            <div>{author}</div>
          </div>
          <div className="btns">
            <button type="button" className="action-btn">
              Comment
            </button>
            <button
              type="button"
              className="action-btn remove-btn"
              onClick={handleRemove}
            >
              Remove
            </button>
            <button type="button" className="action-btn">
              Edit
            </button>
          </div>
        </div>

        <div className="book-prog">
          <div className="circular-progress">
            <div className="progress" />
          </div>
          <div className="progress-stat">
            <p className="percent-complete">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>

        <div className="book-update">
          <div className="current">CURRENT CHAPTER</div>
          <div className="chapter">Chapter 17</div>
          <button type="button" className="prog-btn">
            {' '}
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
