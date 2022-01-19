import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todos }) => {
  return (
    <div>
      {todos.map(({ id, text, checked }) => (
        <TodoItem key={id} id={id} text={text} isDone={checked} />
      ))}
    </div>
  );
};

export default TodoItemList;
