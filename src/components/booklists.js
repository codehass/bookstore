import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Addnew from './addnew';

const Booklists = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <>
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </div>

      <div className="add-book">
        <Addnew />
      </div>
    </>
  );
};

export default Booklists;
