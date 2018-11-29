import React, { Component } from 'react';
import AddAuthor from './components/addAuthor';
import AddBook from './components/addBook';
import ListOfAuthors from './components/listOfAuthors'
// import './App.css';
import Book from './components/book';
import ListOfBooks from './components/listOfBooks';

class App extends Component {
  state = {
    authors: [],
    books: [],
    loading: false,
    showAddBook: false,
    currentAuthorId: ''
  }


  addBook = (idFromChild) => {
    this.setState({
      showAddBook: true,
      currentAuthorId: idFromChild
    })
    
    
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


    console.log("current", this.state.currentAuthorId);
    
    // console.log(books);
    
    // console.log(authors);
    return (
      <div className="App">
      {/* <AddBook/> */}
      <ListOfBooks books={books}/>

      {/* <Book/> */}
        {/* <AddAuthor/>  */}
        {/* <h1>Book Store</h1>
       
        {/* <AddBook />

        {!loading ?
          authors.map(author => (
            <div key={author.id}>
              <h3>name: {author.username} (id{author.id})</h3>
              {
                author.books.map(book => {
                  return (
                  <div key={book.id}>
                    <p>title: {book.title}, raiting: {book.rating}</p>
                  </div>
                  )
              })
              }
            </div>        
          ))
          :
          <p>loading...</p> 
        }  */}

      <ListOfAuthors authors={authors} addbook={this.addBook}/>
       {this.state.showAddBook? <AddBook currentAuthorId={this.state.currentAuthorId}/>: null}
      </div>
    );
  }
}

export default App;
