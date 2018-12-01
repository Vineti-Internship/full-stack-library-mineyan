import React from 'react';
import Author from './author';
import {AuthorsContext} from './context/authors_context';

const ListOfAuthors = () => {
    return (
      
      <div>
         {
           <AuthorsContext.Consumer>
            {
              ({authors, addbook}) => (  
                authors.map(author => <Author key={`${author.id}${author.username}`} username={author.username}  id={author.id} addbook={addbook}/> )      
              )}
          </AuthorsContext.Consumer>
         }
      </div>      
    )
  }
 
export default ListOfAuthors;



  