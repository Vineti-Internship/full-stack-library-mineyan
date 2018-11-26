import React, { Component } from 'react';
import '.././stylesheets/App.css';

class App extends Component {
  state = {
    authors: []
  }

  async componentDidMount() {
    const result = await fetch('http://localhost:3000/authors');
    this.setState({authors: await result.json()});
  }

  render() {
    const { authors } = this.state;
    return (
      <div className="App">
        <h1>Book Store</h1>
        {
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

        }
      </div>
    );
  }
}

export default App;
