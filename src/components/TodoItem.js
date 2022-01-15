import React, { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ id, text, isDone }) => {
  const [done, onDone] = useState(isDone);

  const putDoneState = async () => {

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      mode: "no-cors",
      body: JSON.stringify({ id:id, text:text, checked: done}),
    };

    await fetch(`http://localhost:5000/todos/${id}`, requestOptions).then(() =>
      console.log("send request")
    );
  };

  const onClick = () => {
    onDone((previous) => !previous);
    putDoneState();
  };

  return (
    <div className={styles.todo_item} onClick={onClick}>
      <div className={styles.remove}>&times;</div>
      <div className={`${styles.todo_text} ${done ? styles.text_line : ""}`}>
        <div>{text}</div>
      </div>
      {done ? <div className={styles.check_mark}>✓</div> : null}
    </div>
  );
};

export default TodoItem;
