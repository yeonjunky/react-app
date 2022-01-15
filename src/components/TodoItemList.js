import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoItemList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const json = await fetch("http://127.0.0.1:5000/todos").then((response) =>
      response.json()
    );

    setTodos(json);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todos.map(({ id, text, checked }) => (
        <TodoItem
          key={id}
          id={id}
          text={text}
          isDone={checked}
        />
      ))}
    </div>
  );
};

export default TodoItemList;
