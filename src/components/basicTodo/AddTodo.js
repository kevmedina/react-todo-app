import React, { useState } from "react";
import {v4 as uuid} from "uuid"

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleChange = ({ target: { value } }) => {
    setTodo({
      ...todo,
      task: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a todo" onChange={handleChange} value={todo.task}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
