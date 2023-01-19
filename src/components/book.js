import React from 'react';

const Book = ({ category, title, author }) => {
  return (
    <>
      <div className="book">
        <div className="book-infos">
          <div>
            <div>{category}</div>
            <div>{title}</div>
            <div>{author}</div>
          </div>
          <div>
            <button className="btn">Comment</button>
            <button className="btn">Remove</button>
            <button className="btn">Edit</button>
          </div>
        </div>

        <div className="book-prog">Book progress</div>
        <div className="book-update">book-update</div>
      </div>
    </>
  );
};

export default Book;
