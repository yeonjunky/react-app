import React from "react";
import "./TodoList.css";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import TodoItemList from "./components/TodoItemList";

function App() {
  return (
    <div>
      <Title />
      <AddTodo></AddTodo>
      <TodoItemList />
    </div>
  );
}

export default App;
