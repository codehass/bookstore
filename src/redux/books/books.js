import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RTQBafr0ymANCCYoDspY/books';

const initialState = [];

// Reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.payload.id);
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
}

export const getBooks = createAsyncThunk(
  FETCH_BOOKS,
  async (_, { dispatch }) => {
    const response = await fetch(URL);
    const objectData = await response.json();
    const books = Object.keys(objectData).map((key) => ({
      ...objectData[key][0],
      item_id: key,
    }));

    dispatch({
      type: FETCH_BOOKS,
      payload: books,
    });
  },
);

export const addBook = createAsyncThunk(ADD, async (book, { dispatch }) => {
  await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });

  dispatch({
    type: ADD,
    payload: book,
  });
});

export const removeBook = createAsyncThunk(REMOVE, async (id, { dispatch }) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE,
    payload: { id },
  });
});
