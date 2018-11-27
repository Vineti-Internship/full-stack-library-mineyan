import React, { Component } from 'react';
import '.././stylesheets/App.css';

class App extends Component {
  state = {
    authors: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })
    const result = await fetch('http://localhost:3000/authors')
    this.setState({
      authors: await result.json(),
      loading: false,
    });
  }

  render() {
    const { authors, loading} = this.state;
    return (
      <div className="App">
        <h1>Book Store</h1>
        {  !loading ?
          authors.map(author => (
            <div key={author.id}>
              <h3>{author.username}</h3>
              {
                author.books.map(book => (
                  <div key={book.id}>
                    <p>title: {book.title}, raiting: {book.raiting}</p>
                  </div>
                ))
              }
            </div>        
          ))
          :
          <p>loading...</p> 
        }
      </div>
    );
  }
}

export default App;
