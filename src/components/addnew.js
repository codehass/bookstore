import React from 'react';

const Addnew = () => {
  const options = [
    { id: 1, label: 'Action', value: 'action' },
    { id: 2, label: 'Science Fiction', value: 'science' },
    { id: 3, label: 'Economy', value: 'economy' },
  ];

  return (
    <form>
      <input type="text" placeholder="Book title" />
      <select>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <input type="submit" placeholder="ADD BOOK" />
    </form>
  );
};

export default Addnew;
