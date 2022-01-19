import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ updateTodos }) => {
  const [value, setValue] = useState("");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text: value }),
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = async (event) => {
    if (value !== "") {
      event.preventDefault();

      await fetch("http://localhost:5000/todos", requestOptions)
        .then((response) => response.json())
        .then((json) => updateTodos(json))
        .then(setValue(""));
    } else {
      alert("fill the text before click add");
    }
  };

  return (
    <form className="addTodo" onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button className="button">Add</button>
    </form>
  );
};

export default AddTodo;
