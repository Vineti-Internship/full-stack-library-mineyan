import React from 'react';
import {homePage} from '../stylesheets/homePage.css';

class HomePage extends React.Component {
  state = {
    value: '',
    currentBooks: [],
    showInfo: false,
    bookInfo: {}
  }

  handleChange = (event) => {  
    const {books} = this.props; 
   
    let filteredBooks = books.filter((elem) => elem.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
    console.log(filteredBooks);
  

    this.setState({
      value: event.target.value,
      currentBooks: filteredBooks
    })
  }

  handleClick = (id) => {
    console.log("press");
    let info = this.state.currentBooks.find(book => book.id === id)
    console.log("info", info)
    this.setState((prevState) => ({
      showInfo: !prevState.showInfo,
      bookInfo: info
    })
    )
  }

  render() {
    const {value, currentBooks, showInfo, bookInfo} = this.state;  
  
    let arr = currentBooks.map(book => {
      return (
        <div
          style={{margin: '10px', cursor: 'pointer'}}
          onClick={() => this.handleClick(book.id)}
          className='homeListBooks'
          key={book.id}
          >
          {book.title}
        </div>
       ) 
      });
      
    // let arr = currentBooks.map(book => {return <Book key={book.id} book={books}/> });

    return (
      <div className='home'>
        <div className="search">
          <input
            type="text"
            placeholder=" Search"
            value={this.state.value}
            onChange={this.handleChange} 
          />
        </div>

        <div className="books">
          <div className="bookList">       
            { 
              (value.length < 1)
              ?
              null
              :
              arr
            }
          </div>
            
          <div className="bookInfo" >
            {
              showInfo && bookInfo.id
              ?
              <div>
                <h3>{bookInfo.title} info</h3>
                <div>Id: {bookInfo.id}</div>
                <div>Title: {bookInfo.title}</div>
                <div>Author name: {bookInfo.author}</div>
                <div>Description: {bookInfo.description}</div>
                <div>Rating: {bookInfo.rating}</div>
                <div>Added: {bookInfo.added}</div>
              </div>
              :
              null
            }

          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;