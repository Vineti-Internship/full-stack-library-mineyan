import React from 'react';

const Author = ({username, addbook, id}) => {
  console.log("id", id);
  
  return (
    <div>
      {username}
      <button onClick={() => addbook(id)}>Add book</button>
    </div> 
  );
};

export default Author;