import React from 'react';
import Book from './book';
import Addnew from './addnew';

const Booklists = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];

  return (
    <>
      <div className="books">
        <Book key={books.id} title={books.title} author={books.author} />
        <Book key={books.id} title={books.title} author={books.author} />
        <Book key={books.id} title={books.title} author={books.author} />
      </div>

      <div className="add-book">
        <Addnew />
      </div>
    </>
  );
};

export default Booklists;
