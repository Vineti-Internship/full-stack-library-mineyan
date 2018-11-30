import React from 'react';
import Author from './author';
// import AddBook from './addBook';

const ListOfAuthors = ({authors, addbook}) => {
    return (
      <div>
         {
            authors.map(author => {
              return (   
                <Author key={author.id} username={author.username}  id={author.id} addbook={addbook}/>      
              )
          })
          }
      </div>      
    )
  }
 
export default ListOfAuthors;



  