import React from "react"
import ListOfAuthors from './listOfAuthors';
import {authorsPage} from '../stylesheets/authorsPage.css'
import AddAuthor from './addAuthor';
import AddBook from './addBook';

class AuthorsPage extends React.Component {
  state = {
    showAddAuthor: false,
  }

  clickHandler = () => {
    this.setState(prevState => ({
      showAddAuthor: !prevState.showAddAuthor
    }))
  }
  render () {
    return(
      <div className="authorsList">
        <div className="addAuthor">
           Authors
          <button onClick={this.clickHandler}>Add</button>
        </div>

        <div className="addAuthorForm">
          {
            this.state.showAddAuthor 
            ?
            <AddAuthor/> 
            :
            null
          }
        </div>
        <div className="ListOfAuthors">
          <ListOfAuthors/>
        </div>

        <div className="showAddBook">
          {
            this.props.showAddBook && <AddBook handleSubmit={this.props.handleSubmit} nameOfButton={this.props.nameOfButton}/>
            
          }

        </div>
     
      </div>
  
      
    );
  }

}

export default AuthorsPage;