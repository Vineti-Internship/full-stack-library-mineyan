import React from 'react';
import AddBook from './addBook';
import EditBook from './editBook';
class Book extends React.Component{
  state = {
    rating: this.props.book.rating,
    // editable: false 
    
  }

  handleChange = (event) => {
    this.setState({
      raiting: event.target.value,
    })

    console.log(`http://localhost:4000/books/${this.state.book_id}`);
    
    
    // fetch(`http://localhost:4000/books/${this.state.book_id}`,
    // {
    //   // headers: {'Content-Type': 'application/json'},
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     "Content-Type": "application/json",
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    //   },
    //   method: 'PUT',
    //   body: JSON.stringify({rating: this.state.rating})   
    // });

    // fetch(`http://localhost:4000/books/${this.state.book_id}`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    //   },
    //   mode: 'no-cors',

    //   method: 'PATCH',
    //   body: JSON.stringify({rating: this.state.rating})
    //   })

    // fetch(`http://localhost:4000/books/${this.state.book_id}`, 
    // {
    //   // mode: 'no-cors',
    
    //   method: 'PUT',
    //   body: JSON.stringify({rating: this.state.rating}),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': 'http://127.0.0.1:4000',
    //   }
    // }).then((response) => { 
    //     console.log("done")
    //   })

    //   .catch((e) => console.log("errror", e))
  }


  // handleEdit = () => {
  //   this.setState({
  //     editable: !this.state.editable
  //   })
  // }
  render() {
    // console.log("rating", this.props.rating);

    console.log("this.props.book.id",this.props.book.id);
    
    const options = (num) => {
    let opts = []
    for (let i = 0; i <= num; i++){
      opts.push( <option>{i}</option>)
    }
      return opts;
    }

    return (
      <div>
        {this.props.book.title}

        {/* <span>
          Rating 
          <select value={this.state.rating}  onChange={this.handleChange}>
            {options(5)}  
          </select>
          <br/> 
          <br/>
           
        </span> */}   
        {/* <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button> */}
        <button onClick={() => this.props.handleDelete(this.props.book.id)}>Delete</button>
        {/* {this.state.editable? <AddBook/>: null} */}
        <EditBook handleUpdate={this.props.handleUpdate} errors={this.props.errors}/>
      </div> 
    );
  }
}



export default Book;