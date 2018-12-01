import React from 'react';
import AddBook from './addBook';
import EditBook from './editBook';
class Book extends React.Component{
  state = {
    rating: this.props.book.rating,  
    showInfo: false
  }

  handleChange = (event) => { 
    this.setState({
      rating: event.target.value,
    })
  }

  handleClick = () => {
    fetch(`http://localhost:4000/books/${this.props.book.id}`, {
      headers: {"Content-Type": "application/json"},
      method: 'PUT',
      body: JSON.stringify({
        rating: this.state.rating,
        title: this.props.book.title,
        description: this.props.description,
        })
      })
      .then((response) => {return response.json()})
      .then((book) => {this.setState({rating: book.rating})
    })
  }

  infoClickHandler = () => {
    this.setState(prevState => ({
      showInfo: !prevState.showInfo
    }))
  }
    

  render() {
    const {book} = this.props;
    const options = (num) => {
    let opts = []
    for (let i = 0; i <= num; i++){
      opts.push( <option value={i}>{i}</option>)
    }
      return opts;
    }

    return (
      <div className='homeListBooks'>
        {this.props.book.title }
        <button onClick={this.infoClickHandler}>info</button>
        {
          this.state.showInfo &&
          <div className="info"> 
          <div className="infoPart">
            <h3>{book.title} info</h3>
            <hr/>
            <div>Id: {book.id}</div>
            <div>Title: {book.title}</div>
            <div>Author name: {book.author}</div>
            <div>Description: {book.description}</div>
            <div>Rating: {this.state.rating}</div>
            <div>Added: {book.added}</div>
          </div>

          <div className="editPart">
          <hr/>
            <span>
            <select value={this.state.rating}  onChange={this.handleChange} onClick={this.handleClick}>
              {options(5)}  
            </select>
            </span>       
            <button onClick={() => this.props.handleDelete(this.props.book.id)}>Delete</button>
            <EditBook handleUpdate={this.props.handleUpdate} errors={this.props.errors} bookId={this.props.book.id}/> 
          </div>
      
          </div> 
        }

      </div>  
    );
  }
}


export default Book;









// import React from 'react';
// import AddBook from './addBook';


// class Book extends React.Component{
//   state = {
//     rating: this.props.book.rating,  
    
//   }

//   handleChange = (event) => { 
//     this.setState({
//       rating: event.target.value,
//     })

//   }
    
//   render() {
//     // console.log("rating", this.props.rating);
//     console.log('this.state.rating', this.state.rating);


//     console.log("this.props.book.id",this.props.book.id);
    
//     const options = (num) => {
//     let opts = []
//     for (let i = 0; i <= num; i++){
//       opts.push( <option value={i}>{i}</option>)
//     }
//       return opts;
//     }

//     return (
//       <div className='homeListBooks'>
//         {this.props.book.title }{this.props.book.title}

//        <span>
          
//           <select value={this.state.rating}  onChange={this.handleChange} onClick={this.handleClick}>
//             {options(5)}  
//           </select>
//           {/* Rating    */}
    
           
//         </span> 
    
//         <button onClick={() => this.props.handleDelete(this.props.book.id)}>Delete</button>
//         <EditBook handleUpdate={this.props.handleUpdate} errors={this.props.errors} bookId={this.props.book.id}/>
//       </div> 
//     );
//   }
// }



// export default Book;