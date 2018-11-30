import React from 'react';

class AddAuthor extends React.Component {
  state = {
    name: '',
    username: '',
    description: '',
    // books: [],
    // books_count: null
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState((prevState) => ({  
      ...prevState.values,
      [name]: value
    }));
  }

  render() {
    const {name, username, description} = this.props.errors;
   
    return (
      <div>
          <input 
            placeholder="Name:"
            type="text"
            name="name" 
            onChange={this.handleChange} 
          />
          <div style={{color: "red"}}>{name}</div>
          <br/>

          <input 
            placeholder="Username:"
            type="text" 
            name="username" 
            onChange={this.handleChange} 
          />
          <div style={{color: "red"}}>{username}</div>
          <br/>

          
          <textarea 
            placeholder="Description:"
            value={this.state.description}
            name="description"
            onChange={this.handleChange} 
          />
          <div style={{color: "red"}}>{description}</div>
          <br/>

          <button onClick={() => this.props.handleSubmit(this.state)}>Add Author</button>
      </div>
  )
  }
}

export default AddAuthor;

