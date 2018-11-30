import React from 'react';
import Book from './book';

const ListOfBooks = (props) =>  {
    return (
      <div>
         {
            props.books.map(book => {
              return (
                <Book key={book.id} book={book} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} errors={props.errors}/>         
              )
            })
          }
      </div>      
    )
  }
 
 
export default ListOfBooks;
