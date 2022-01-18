import React, { useEffect, useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ id, text, isDone }) => {
  const [done, setDone] = useState(isDone);
  const [isDelete, setDelete] = useState(false);

  const doneStateRequest = async () => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: id, text: text, checked: !done }),
    };

    await fetch(`http://localhost:5000/todos/${id}`, requestOptions).then(
      () => {
        console.log("sending put request successfully");
      }
    );
  };

  const deleteStateRequest = async () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    };

    await fetch(`http://localhost:5000/todos/${id}`, requestOptions).then(
      () => {
        console.log("sending delete request succesfully");
      }
    );
  };

  const onClick = () => {
    doneStateRequest();
    setDone((previous) => !previous);
  };

  const deleteTodo = (event) => {
    deleteStateRequest();
    setDelete(true);
  };

  return (
    <div className={`${styles.todo_item} ${isDelete ? styles.deleted : ""}`}>
      <div className={styles.remove} onClick={deleteTodo}>
        &times;
      </div>
      <div
        className={`${styles.todo_text} ${done ? styles.text_line : ""}`}
        onClick={onClick}
      >
        <div>{text}</div>
      </div>
      {done ? <div className={styles.check_mark}>✓</div> : null}
    </div>
  );
};

export default TodoItem;
