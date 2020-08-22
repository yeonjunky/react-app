import React, { Component } from 'react';
import './TodoList.css';
import TodoTemplate from './components/TodoTemplate';
import Todoform from './components/Todoform'
import TodoItemList from './components/TodoItemList'

class App extends Component{

  id = 3

  state = {
    input : '',
    todos : [
      {id: 0, text : 'introduce react', checked : false},
      {id : 1, text : 'hello!', checked : true},
      {id : 2, text : 'hahaha!', checked : false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleremove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {

    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleremove
    } = this;

    return(

      <TodoTemplate form=
      {
      <Todoform
        value = {input}  
        onKeyPress = {handleKeyPress}
        onChange = {handleChange}
        onCreate = {handleCreate}
        />
      }>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleremove}/>
      </TodoTemplate>
     
    )
  }

}

export default App;
