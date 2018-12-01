import React from 'react';
import AddBook from './addBook';


class Book extends React.Component{
  state = {
    rating: this.props.book.rating,  
    
  }

  handleChange = (event) => { 
    this.setState({
      rating: event.target.value,
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
      <div className='homeListBooks'>
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