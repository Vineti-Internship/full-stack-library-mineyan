import React from 'react';
import Author from './author';
import AddBook from './addBook';
class  ListOfAuthors extends React.Component {

  render() {
    return (
      <ul>
         {
            this.props.authors.map(author => {
              return (   
                <Author username={author.username}  id={author.id} addbook={this.props.addbook}/>      
              )
          })
          }
  
      </ul>      
    
    )};
  
  }
 
 
export default ListOfAuthors;



  // return (
    // <table>
    //   <tr>
    //     <th>ID</th>
    //     <th>Name</th>
    //     <th>Username</th>
    //     {/* <th>Books</th> */}
    //     <th>Books count</th>
    //     <th>Description</th>
    //   </tr>
    //   {authors.map(author => {
    //     return (
    //       <tr>
    //         <td>{author.id}</td>
    //         <td>{author.name}</td>
    //         <td><Author username={author.username}/></td>
    //         {/* <td>
    //         {
    //             author.books.map(book => {
    //               return (
    //               <p key={book.id}>
    //                 <p>title: {book.title}</p>
    //               </p>
    //               )
    //           })
    //           }
    //           </td> */}
    //         <td>{author.books_count}</td>
    //         <td>{author.description}</td>
    //       </tr>
    //     )
    //   })}

    // </table>

// )
