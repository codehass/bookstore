import { combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const allReducers = combineReducers({
  booksReducer,
  categoriesReducer,
});

export default allReducers;
