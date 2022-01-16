import React, { useEffect, useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ id, text, isDone }) => {
  const [done, setDone] = useState(isDone);

  const doneStateRequest = async () => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: id, text: text, checked: !done }),
    };

    await fetch(`http://localhost:5000/todos/${id}`, requestOptions).then(() =>
      console.log("sending request successfully")
    );
  };

  const onClick = () => {
    doneStateRequest();
    setDone((previous) => !previous);
  };

  const todoDelete = () => {};

  return (
    <div className={styles.todo_item} onClick={onClick}>
      <div className={styles.remove} onClick={todoDelete}>
        &times;
      </div>
      <div className={`${styles.todo_text} ${done ? styles.text_line : ""}`}>
        <div>{text}</div>
      </div>
      {done ? <div className={styles.check_mark}>✓</div> : null}
    </div>
  );
};

export default TodoItem;
