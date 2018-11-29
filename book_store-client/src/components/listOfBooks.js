import React from 'react';
import Book from './book';

class ListOfBooks extends React.Component {
  render() {
    return (
      <ul>
         {
            this.props.books.map(book => {
              return (
                <Book title={book.title} id={book.id} rating={book.rating}/>         
              )
            })
          }
  
      </ul>      
    
    )};
  
  }
 
 
export default ListOfBooks;
