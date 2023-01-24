import React from 'react';
import { useDispatch } from 'react-redux';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStats = () => {
    dispatch(status());
  };

  return (
    <div>
      <button type="button" onClick={handleStats}>
        {' '}
        Check status
      </button>
    </div>
  );
};

export default Categories;
