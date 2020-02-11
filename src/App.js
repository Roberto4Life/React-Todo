import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';


const bananas = [
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        grocList:bananas
    };
    console.log(bananas)
  }

  singleClickHandler = () => alert("Single Click!");

  toggleItem = clickedId => {
    const newTodoList = this.state.grocList.map(item => {
      
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      grocList: newTodoList
    });
  };
  
  clearCompleted = () =>
    console.log(bananas);


  addNewItem = itemText => {
    const newItem = {
      id: Date.now(),
      completed: false,
      name: itemText
    }
    this.setState({
      grocList: [...this.state.grocList, newItem]
    })
  }
  render() {
    console.log('rendeing...');
    return (
      
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addNewItem={this.addNewItem}/>
        </div>
        <TodoList
          bananas={this.state.grocList}
          toggleItem={this.toggleItem}
        />
        <button onClick={this.clearCompleted}>
          Clear Purchased
        </button>
      </div>
      
    );
  }
}

export default App;