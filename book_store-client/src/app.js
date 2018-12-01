import React, { Component } from 'react';
import AddAuthor from './components/addAuthor';
import AddBook from './components/addBook';
import ListOfAuthors from './components/listOfAuthors'
import './App.css';
import Book from './components/book';
import ListOfBooks from './components/listOfBooks';
import validateAuthor from './components/validateAuthor';
import validateBook from './components/validateBook';

import HomePage from './components/homePage';
import AuthorsPage from './components/authorsPage';
import BooksPage from './components/booksPage';

import {BooksContext} from './components/context/books_context';
import {AuthorsContext} from './components/context/authors_context';

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
    }
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })

    try {
      const result = await fetch('http://localhost:4000/authors');
      const res = await fetch('http://localhost:4000/books');
      const authors = await result.json();
      const books = await res.json();
      this.setState({
        authors,
        books,
        loading: false,
      });
    }
    catch(e) {
      console.log(e);   
    }    
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
      errorsOfAuthor: errors,  
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
        body: JSON.stringify(body)
        })
        .then((response) => {return response.json()})
        .then((author) => {this.addNewAuthor(author)})
        .catch((e) => console.log(e));
         
    }
  }

  handleDeleteForBook = (id) => {
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
  
    let body = { 
      book: { 
            title: values.title,
            description: values.description,
            author_id: this.state.currentAuthorId,
          }
    };
 
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



  
  render() { 
    const { authors, books, loading} = this.state;
    
    return (
      <div className="App">
      {
        !loading ?
          <React.Fragment>
            <HomePage books={this.state.books}/>              
              <AuthorsContext.Provider
                value={{
                  authors: this.state.authors,
                  addbook:  this.openAddBookForm,
                  handleSubmit: this.addAuthor,
                  errors: this.state.errorsOfAuthor,
      
                  }}>

                  <BooksContext.Provider value={{
                    handleSubmit: this.addBook,
                    errors: this.state.errorsOfBook,
                    
                    showSubmitButton: true,
                    books: this.state.books,
                    handleDelete: this.handleDeleteForBook,
                    handleUpdate: this.handleUpdateForBook
                  }}>
                    <AuthorsPage showAddBook={this.state.showAddBook} handleSubmit={this.addBook} nameOfButton="Add Book"/>
                    <BooksPage />
                  </BooksContext.Provider>

              </AuthorsContext.Provider>
              </React.Fragment>
    
        
          :
          <p>loading...</p> 
        } 
        </div>
        
    );
  }
}

export default App;
