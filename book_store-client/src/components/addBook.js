
import React from 'react';

class AddBook extends React.Component {
  state = {
    title: '',
    description: '',
    rating: 0,
  };
  
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState((prevState) => ({  
      ...prevState.values,
      [name]: value
    }));
  }

  // handleSubmit = (event) => {   
  //   console.log("current", this.props.currentAuthorId);

  //   event.preventDefault();
  //   const errors = validate(this.state.values);
  //   this.setState({
  //     errors
  //   })

  //   console.log("current", this.props.currentAuthorId);
    
  //   let body = ({ 
  //     book: { 
  //           title: this.state.values.title,
  //           description: this.state.values.description,
  //           author_id: this.props.currentAuthorId,
  //         }
  //   });
    
  //   // if(this.isEmpty(errors)){
  //     fetch('http://localhost:4000/books', {
  //       headers: {"Content-Type": "application/json"},
  //       method: 'POST',
  //       body: JSON.stringify(body)
  //       });
  //       // .then(res => res.json())
  //       // .then((obj) => {
  //       //   if(obj) {
  //       //     this.setState({added: true })
  //       //     console.log('object fetched...', obj,"addded", this.state.added)
  //       //   }
  //         // else {
  //         //   this.setState({added: false })
  //         // }
          
  //       // })
  //       // .catch(err => {
  //       //   console.log("not correct")
  //       // });
  //     this.setState({
  //       added: true
  //     })
  //   // }
  // }

  render() {
    const {title, description} = this.props.errors;   
    
    console.log("showSubmitButton", typeof(this.props.showSubmitButton));
    
    return (
      
      <div>
          <input 
            placeholder="Title"
            type="text"
            name="title" 
            onChange={this.handleChange} />

          <div style={{color: "red"}}>{title}</div>
          <br/>

          
          <textarea 
            placeholder='Description:'
            value={this.state.description} 
            name="description" 
            onChange={this.handleChange} />

          <div style={{color: "red"}}>{description}</div>
          <br/>

          {
            this.props.showSubmitButton 
            ?
            <button onClick={() => this.props.handleSubmit(this.state)}>{this.props.nameOfButton}</button>
            :
            null
          }

        </div>
     
  )
  }
}

export default AddBook;

