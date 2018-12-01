import React from 'react';

const Author = ({username, addbook, id}) => {
  return (
    <div key={id}>
      {username}
      <button onClick={() => addbook(id)}>Add book</button>
    </div> 
  );
};

export default Author;



// class Author extends React.Component {
//   state = {
//     addable: false
//   }

//   handleAdd = () => {
//     if(this.state.editable){
//       this.props.addbook(this.props.id);
//     }

//     this.setState({
//       addable: !this.state.addable
//     })
//   }

//   render() {
//     return (
//       <div>
//         {this.props.username}
//         <button onClick={() => this.handleAdd()}>{!this.state.addable ? 'Add book' : 'Submit'}</button>
//       </div> 
//     );
//   }  
// };
