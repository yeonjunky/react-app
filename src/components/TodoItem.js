import React from "react";
import "./TodoItem.css";

const TodoItem = ({ text, isChecked }) => {

  return (
    <div className="todo-item">
      <div className="remove">&times;</div>
      <div className={`todo-text ${isChecked && "checked"}`}>
        <div>{text}</div>
      </div>
      {isChecked && <div className="check-mark">✓</div>}
    </div>
  );
};

export default TodoItem;
