// Actions
const STATUS = 'bookstore/categories/STATUS';

const initialState = [];

// Reducer
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

// Action Creators
export function status() {
  return {
    type: STATUS,
  };
}
