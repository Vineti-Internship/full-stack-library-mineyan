
import React from 'react';
import validate from './validate_books';


class AddBook extends React.Component {
  state = {
    values: {
      title: '',
      description: '',
      rating: 0,
    },
    errors: {
      title: '',
      description: '',
      rating: 0,
    },
    added: false
  };
  
  // isEmpty = (obj) => {
  //   return Object.values(obj).every(x => (x === null || x === ''));
  // }
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState((prevState) => ({  
      values: {
          ...prevState.values,
          [name]: value
        }   
    }));
  }

  handleSubmit = (event) => {   
    console.log("current", this.props.currentAuthorId);

    event.preventDefault();
    const errors = validate(this.state.values);
    this.setState({
      errors
    })

    console.log("current", this.props.currentAuthorId);
    
    let body = ({ 
      book: { 
            title: this.state.values.title,
            description: this.state.values.description,
            author_id: this.props.currentAuthorId,
          }
    });
    
    // if(this.isEmpty(errors)){
      fetch('http://localhost:4000/books', {
        headers: {"Content-Type": "application/json"},
        method: 'POST',
        body: JSON.stringify(body)
        });
        // .then(res => res.json())
        // .then((obj) => {
        //   if(obj) {
        //     this.setState({added: true })
        //     console.log('object fetched...', obj,"addded", this.state.added)
        //   }
          // else {
          //   this.setState({added: false })
          // }
          
        // })
        // .catch(err => {
        //   console.log("not correct")
        // });
      this.setState({
        added: true
      })
    // }
  }

  render() {
    console.log("current", this.props.currentAuthorId);


    const {title, description, rating, added} = this.state.errors;    
    return (
      <form onSubmit={this.handleSubmit}>
          Title: <br/>
          <input 
            type="text"
            name="title" 
            onChange={this.handleChange} />

          <div style={{color: "red"}}>{title}</div>
          <br/>

          Description: <br/>
          <textarea 
            value={this.state.description} 
            name="description" 
            onChange={this.handleChange} />

          <div style={{color: "red"}}>{description}</div>
          <br/>

          <input type="submit" value="Add Book" />
          <br/>
          
          {added ? <p>successfully added</p> : null}
      </form>
  )
  }
}

export default AddBook;

