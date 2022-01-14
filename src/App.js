import React, { Component } from "react";
import "./TodoList.css";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import TodoItemList from "./components/TodoItemList";

const todos = [
  { id: 0, text: "introduce react", checked: false },
  { id: 1, text: "hello!", checked: true },
  { id: 2, text: "hahaha!", checked: false },
];

let id = 3;

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <AddTodo></AddTodo>
        <TodoItemList todos={todos} />
      </div>
    );
  }
}

export default App;
