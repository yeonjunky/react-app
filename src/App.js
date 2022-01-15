import React, { Component } from "react";
import "./TodoList.css";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <AddTodo></AddTodo>
        <TodoItemList />
      </div>
    );
  }
}

export default App;
