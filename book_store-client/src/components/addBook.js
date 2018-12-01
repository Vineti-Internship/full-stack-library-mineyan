
import React from 'react';
import {BooksContext} from './context/books_context';

class AddBook extends React.Component {
  state = {
    title: '',
    description: '',
  
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
      <BooksContext.Consumer> 
        { (context) => 
          (
            <div>
              <input 
                placeholder="Title"
                type="text"
                name="title" 
                onChange={this.handleChange} />

              <div style={{color: "red"}}>{context.errors.title}</div>
              <br/>

              
              <textarea 
                placeholder='Description:'
                value={this.state.description} 
                name="description" 
                onChange={this.handleChange} />

              <div style={{color: "red"}}>{context.errors.description}</div>
              <br/>

              {
                context.showSubmitButton 
                ?
                <button onClick={() => this.props.handleSubmit(this.state, this.props.bookId)}>{this.props.nameOfButton}</button>
                :
                null
              }
              
            </div>
          )
      }
      </BooksContext.Consumer>
     
  )
  }
}

export default AddBook;
