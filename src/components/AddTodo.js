import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    mode: "no-cors",
    body: JSON.stringify({})
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = async (event) => {
    await fetch("http://localhost:5000/todos");
  };

  return (
    <form className="addTodo" onSubmit={onSubmit}>
      <input value={value} onChange={onChange} />
      <button className="button">Add</button>
    </form>
  );
};

export default AddTodo;
