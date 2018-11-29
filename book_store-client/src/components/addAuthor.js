import React from 'react';
import {validate} from './validate';


class AddAuthor extends React.Component {
  state = {
    values: {
      name: '',
      username: '',
      description: '',
      books: [],
      books_count: null
    },
    errors: {
      name: '',
      username: '',
      description: '',
    },
    added: ''
  };

  isEmpty = (obj) => {
    return Object.values(obj).every(x => (x === null || x === ''));
  }
  
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
    // const author = {author: this.state.values.username}
    console.log(this.state.added);
    
    event.preventDefault();
    const errors = validate(this.state.values);
    this.setState({
      errors
    })

    let body = ({ 
      author: { 
            name: this.state.values.name,
            username: this.state.values.username, 
            description: this.state.values.description
          }
    });
    console.log("here", this.state.values.username);
    
    // if(this.isEmpty(errors)){
      fetch('http://localhost:4000/authors', {
        headers: {"Content-Type": "application/json"},
        method: 'POST',
        body: JSON.stringify(body)
        })
  
        .then(res => res.json())
        .then((obj) => {
          if(obj) {
            this.setState({added: 'success' })
            console.log('object fetched...', obj,"addded", this.state.added)
          }
          else {
            this.setState({added: 'problem' })
          }
          
        })
        .catch(err => {
          this.setState({added: 'please fill all fields correctly' })
          console.log("not correct")
        });
      // this.setState({
      //   added: true
      // })
    // }
  }

  render() {
    const {name, username, description} = this.state.errors;
    console.log( "addded", this.state.added);
   
    
    return (
      <form onSubmit={this.handleSubmit} className="addauthor">
          Name: <br/>
          <input type="text" name="name" onChange={this.handleChange} />
          <div style={{color: "red"}}>{name}</div>
          <br/>

          Username: <br/>
          <input type="text" name="username" onChange={this.handleChange} />
          <div style={{color: "red"}}>{username}</div>
          <br/>

          Description: <br/>
          <textarea value={this.state.description} name="description" onChange={this.handleChange} />
          <div style={{color: "red"}}>{description}</div>
          <br/>

          <input type="submit" value="Add Author" />
          <br/>

          <p>{this.state.added}</p>
          
      </form>
  )
  }
}

export default AddAuthor;

