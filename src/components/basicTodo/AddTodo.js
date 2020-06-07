import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    completed: false,
  });

  const handleChange = ({ target: { value } }) => {
    setTodo({
      ...todo,
      title: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, title: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          onChange={handleChange}
          value={todo.title}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
