import React, { useState, useEffect } from "react";
import "./TodoList.css";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import TodoItemList from "./components/TodoItemList";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const json = await fetch("http://localhost:5000/todos").then((response) =>
      response.json()
    );

    setTodos(json);
  };

  const updateTodos = (todos) => {
    setTodos(todos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Title />
      <AddTodo updateTodos={updateTodos} />
      <TodoItemList todos={todos} />
    </div>
  );
}

export default App;
