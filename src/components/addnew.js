import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Addnew = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    id: '',
    title: '',
    author: '',
  });

  function handleChange(evt) {
    // const value = evt.target.value;
    setState({ ...state, id: v4(), [evt.target.name]: evt.target.value });
  }

  const addToStore = (e) => {
    e.preventDefault();

    dispatch(addBook(state));
    setState({ id: '', title: '', author: '' });
  };

  return (
    <form onSubmit={addToStore}>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        value={state.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        value={state.author}
        onChange={handleChange}
      />

      <input type="submit" placeholder="ADD BOOK" />
    </form>
  );
};

export default Addnew;
