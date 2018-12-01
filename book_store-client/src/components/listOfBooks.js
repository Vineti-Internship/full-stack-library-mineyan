import React from 'react';
import Book from './book';
import {BooksContext} from './context/books_context';

const ListOfBooks = () =>  {
    return (
      <div className="list"> 
         {
           <BooksContext.Consumer>
             {
               context => (                
                <React.Fragment>
                { context.books 
                  ? 
                  <div>{context.books.map(book => {
                      return (
                        <Book  key={book.id} book={book} handleDelete={context.handleDelete} handleUpdate={context.handleUpdate} errors={context.errorsOfBook}/>
                      )
                    })}
                  </div> 
                  : 
                  null }
                
              </React.Fragment>
               )
               
             }
           </BooksContext.Consumer>

          }
      </div>      
    )
  }
 
 
export default ListOfBooks;
