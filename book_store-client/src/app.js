import React, { Component } from 'react';
import AddAuthor from './components/addAuthor';
import AddBook from './components/addBook';
import ListOfAuthors from './components/listOfAuthors'
import './App.css';
import Book from './components/book';
import ListOfBooks from './components/listOfBooks';
import validateAuthor from './components/validateAuthor';
import validateBook from './components/validateBook';

class App extends Component {
  state = {
    authors: [],
    books: [],
    loading: false,
    showAddBook: false,
    currentAuthorId: '',
    currentBookId: '',

    errorsOfAuthor: {
      name: '',
      username: '',
      description: '',
    },

    errorsOfBook: {
      title: '',
      description: '',
      // rating: 0,
    },
  }

  isEmpty = (obj) => {
    return Object.values(obj).every(x => (x === null || x === ''));
  }

  openAddBookForm = (idFromChild) => {
    console.log("idFromChild",idFromChild);
  
    this.setState({
      showAddBook: !this.state.showAddBook,
      currentAuthorId: idFromChild
    })   
  }

  addNewAuthor = (author) => {
    this.setState({
      authors: [...this.state.authors, author]
    })
  }

  addNewBook = (book) => {
    this.setState({
      books: [...this.state.books, book]
    })
  }

  deleteBook = (id) => {
    let newBooks = this.state.books.filter((book) => book.id !== id )
    this.setState({
      books: newBooks
    })
  }

  addAuthor = (values) => {
    const errors = validateAuthor(values);

    this.setState({
      errorsOfAuthor: errors
    })

    let body = ({ 
      author: { 
            name: values.name,
            username: values.username, 
            description: values.description
          }
    });

    if(this.isEmpty(errors)){
      fetch('http://localhost:4000/authors', {
        headers: {"Content-Type": "application/json"},
        method: 'POST',
        })
        .then((response) => {return response.json()})
        .then((author) => {this.addNewAuthor(author)})
    }
  }

  handleDeleteForBook = (id) => {
    console.log("yaaaaaaaaaa");
    console.log("id", id)
    
    fetch(`http://localhost:4000/books/${id}`, {
      headers: {"Content-Type": "application/json"},
      method: 'DELETE',
      })
      .then((response) => {
        this.deleteBook(id)
      })
  } 

  updateBook = (book) => {
    let newBooks = this.state.books.filter((b) => b.id !== book.id);
    newBooks.push(book)
    this.setState({
      books: newBooks
    })
  }

  handleUpdateForBook = (book, id) => {
    const body = {
      ...book, id
    }
    fetch(`http://localhost:4000/books/${id}`, {
      headers: {"Content-Type": "application/json"},
      method: 'PUT',
      body: JSON.stringify(body)
      })
      .then((response) => {
        this.updateBook(body)
      })
  }


  
  addBook = (values) => {   
    const errors = validateBook(values);
    this.setState({
      errorsOfBook: errors
    })
  
    let body = ({ 
      book: { 
            title: values.title,
            description: values.description,
            author_id: this.state.currentAuthorId,
          }
    });

    console.log("body", body);
    
    
    if(this.isEmpty(errors)){
      fetch('http://localhost:4000/books', {
        headers: {"Content-Type": "application/json"},
        method: 'POST',
        body: JSON.stringify(body)
        })
        .then((response) => {return response.json()})
        .then((book) => {this.addNewBook(book)})
    }
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })
    const result = await fetch('http://localhost:4000/authors')
    this.setState({
      authors: await result.json(),
      loading: false,
    });

    const rresult = await fetch('http://localhost:4000/books')
    this.setState({
      books: await rresult.json(),
    });
    
  }

  
  render() { 
    const { authors, books, loading} = this.state;
    return (
      <div className="App">
         <h1>Book Store</h1>
        {
        !loading ?
          <React.Fragment>
            {/* <Book/>  */}
            {/* <AddAuthor handleSubmit={this.addAuthor} errors={this.state.errorsOfAuthor}/>    */}
            <div>
              <ListOfBooks 
                books={books}
                handleDelete={this.handleDeleteForBook} 
                handleUpdate = {this.handleUpdateForBook} 
                errors={this.state.errorsOfBook}
              />
            </div>
      
            <div>
              <ListOfAuthors authors={authors} addbook={this.openAddBookForm}/>
            </div>
            <br/>
            <div>
             {this.state.showAddBook
             ? 
             <AddBook
                handleSubmit={this.addBook}
                errors={this.state.errorsOfBook}
                nameOfButton="Add Book"
                showSubmitButton={true}
              />
              :
               null}
            </div>

                {/* <AddBook/>  */}
          </React.Fragment>
          :
          <p>loading...</p> 
        } 

     
      </div>
    );
  }
}

export default App;
