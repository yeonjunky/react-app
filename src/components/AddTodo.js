import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="addTodo">
      <input value={value} onChange={onChange} />
      <button className="button">Add</button>
    </div>
  );
};

export default AddTodo;
