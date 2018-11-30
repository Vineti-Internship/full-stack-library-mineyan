import React from 'react';
import AddBook from './addBook';
import EditBook from './editBook';
class Book extends React.Component{
  state = {
    rating: this.props.book.rating,  
    // rating: this.props. 
  }

  handleChange = (event) => { 
    this.setState({
      rating: event.target.value,
    })

    console.log(`http://localhost:4000/books/${this.props.book.id}}`);

      console.log('this.state.rating', this.state.rating);
      // const body = {
      //   rating: this.state.rating
      // }
      
      // fetch(`http://localhost:4000/books/${this.props.book.id}`, {
      //   headers: {"Content-Type": "application/json"},
      //   method: 'PUT',
      //   body: JSON.stringify({
      //     rating: this.state.rating,
      //     title: this.props.book.id,
      //     description: this.props.description,
      //     })
      //   })
      //   .then((response) => {return response.json()})
      //   .then((book) => {this.setState({rating: book.rating})
      // })
        // .then((response) => {
        //   this.setState({
        //     rating: body
        //   })
        // })

  }

  handleClick = () => {
    fetch(`http://localhost:4000/books/${this.props.book.id}`, {
      headers: {"Content-Type": "application/json"},
      method: 'PUT',
      body: JSON.stringify({
        rating: this.state.rating,
        title: this.props.book.id,
        description: this.props.description,
        })
      })
      .then((response) => {return response.json()})
      .then((book) => {this.setState({rating: book.rating})
    })
  }
    

  render() {
    // console.log("rating", this.props.rating);
    console.log('this.state.rating', this.state.rating);


    console.log("this.props.book.id",this.props.book.id);
    
    const options = (num) => {
    let opts = []
    for (let i = 0; i <= num; i++){
      opts.push( <option value={i}>{i}</option>)
    }
      return opts;
    }

    return (
      <div>
        {this.props.book.title }{this.props.book.title}

       <span>
          
          <select value={this.state.rating}  onChange={this.handleChange} onClick={this.handleClick}>
            {options(5)}  
          </select>
          {/* Rating    */}
    
           
        </span> 
    
        <button onClick={() => this.props.handleDelete(this.props.book.id)}>Delete</button>
        <EditBook handleUpdate={this.props.handleUpdate} errors={this.props.errors} bookId={this.props.book.id}/>
      </div> 
    );
  }
}



export default Book;