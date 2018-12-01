import React from 'react';

const Author = ({username, addbook, id}) => {
  return (
    <div key={id}>
      {username}
      <button onClick={() => addbook(id)}>Add book</button>
    </div> 
  );
};

export default Author;

