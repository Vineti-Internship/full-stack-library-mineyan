import React from 'react';
import AddBook from './addBook';
class EditBook extends React.Component{
  state = {  
    editable: false    
  }

  handleChange = (event) => {
    this.setState({
      raiting: event.target.value,
    })
  }


  handleEdit = () => {
    // if(this.state.editable){
    //   let name = "smt";
    //   let description = "smtjnsadk";
    //   let id = 75;
    //   let book = {id: id, name: name, description: description}
      // this.props.handleUpdate(book);
      // this.props.handleUpdate()

    // }



    this.setState({
      editable: !this.state.editable
    })
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleEdit}>{this.state.editable? 'Submit' : 'Edit'}</button>
        {/* <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button> */}

        {
          this.state.editable
          ? 
          <AddBook 
            errors={this.props.errors}
            nameOfButton="Edit"
            showSubmitButton={true}
            handleSubmit={this.props.handleUpdate}
            bookId={this.props.bookId}

          />
          : 
          null
        }
      </React.Fragment> 
    );
  }
}



export default EditBook;