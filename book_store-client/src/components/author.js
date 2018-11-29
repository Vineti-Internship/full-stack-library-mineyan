import React from 'react';

const Author = (props) => {
  return (
    <li>
      {props.username}
      <button onClick={() => props.addbook(props.id)}>Add book</button>
    </li> 
  );
};

export default Author;