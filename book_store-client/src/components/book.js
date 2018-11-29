import React from 'react';

class Book extends React.Component{
  state = {
    rating: this.props.rating,
    book_id: this.props.id
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

    fetch(`http://localhost:4000/books/${this.state.book_id}`, 
    {
      // mode: 'no-cors',
      method: 'PUT',
      body: JSON.stringify({rating: this.state.rating}),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }).then((response) => { 
        console.log("done")
      })

      .catch((e) => console.log("errror", e))
  }

  render() {
    console.log("rating", this.props.rating);
    const options = (num) => {
    let opts = []
    for (let i = 0; i <= num; i++){
      opts.push( <option>{i}</option>)
    }
      return opts;
    }

    return (
      <React.Fragment>
        {this.props.title}
        <span>
          Rating 
          <select value={this.state.rating}  onChange={this.handleChange}>
            {options(5)}  
          </select>
          <br/> 
          <br/>
           
        </span>
         
      </React.Fragment> 
    );
  }
}



export default Book;