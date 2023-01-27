import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Addnew = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    item_id: '',
    title: '',
    author: '',
    category: 'Action',
  });

  function handleChange(evt) {
    // const value = evt.target.value;
    setState({ ...state, item_id: v4(), [evt.target.name]: evt.target.value });
  }

  const addToStore = (e) => {
    e.preventDefault();
    dispatch(addBook(state));
    setState({
      item_id: '',
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={addToStore}>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={state.title}
          onChange={handleChange}
          className="input-text"
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={state.author}
          onChange={handleChange}
          className="input-text"
        />

        <input type="submit" placeholder="ADD BOOK" className="add-btn" />
      </form>
    </>
  );
};

export default Addnew;
