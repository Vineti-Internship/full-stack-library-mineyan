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



// import React from 'react';
// import Book from './book';

// const ListOfBooks = (props) =>  {
//     return (
//       <div>
//          {
//             props.books.map(book => {
//               return (
//                 <Book key={book.id} book={book} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} errors={props.errors}/>         
//               )
//             })
//           }
//       </div>      
//     )
//   }
 
 
// export default ListOfBooks;
