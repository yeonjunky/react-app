import React, { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ id, text, isDone }) => {

  const [done, onDone] = useState(isDone);

  const onClick = () => {
    onDone((previous) => !previous)
  }

  return (
    <div className={styles.todo_item} onClick={onClick}>
      <div className={styles.remove}>&times;</div>
      <div
        className={`${styles.todo_text} ${done ? styles.text_line : ""}`}
      >
        <div>{text}</div>
      </div>
      {done ? <div className={styles.check_mark}>✓</div> : null}
    </div>
  );
};

export default TodoItem;
