import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
      super();
      this.state = {
          todoItem:""
      };
  }

  handleChanges = e => {
    this.setState({
        todoItem: e.target.value
    });
  };

  handleSubmit = e => {
      e.preventDefault();
      this.props.addNewItem(this.state.todoItem);
  }

  // class property to submit form

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="item"
            value={this.state.name}
            onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;