import React from 'react';
import {AuthorsContext} from './context/authors_context';


class AddAuthor extends React.Component {
  state = {
    name: '',
    username: '',
    description: ''
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState((prevState) => ({  
      ...prevState.values,
      [name]: value
    }));
  }

  render() {
    return (  
        <AuthorsContext.Consumer>
          {
            context => 
            (
              <div>
                <input 
                  placeholder="Name:"
                  type="text"
                  name="name" 
                  onChange={this.handleChange} 
                />
                <div style={{color: "red"}}>{context.errors.name}</div>
                <br/>

                <input 
                  placeholder="Username:"
                  type="text" 
                  name="username" 
                  onChange={this.handleChange} 
                />
                <div style={{color: "red"}}>{context.errors.username}</div>
                <br/>

                
                <textarea 
                  placeholder="Description:"
                  value={this.state.description}
                  name="description"
                  onChange={this.handleChange} 
                />
                <div style={{color: "red"}}>{context.errors.description}</div>
                <br/>

                <button onClick={() => context.handleSubmit(this.state)}>Add Author</button>
              </div>
            )
            
          }
          
          </AuthorsContext.Consumer>
      )
  }
}

export default AddAuthor;

