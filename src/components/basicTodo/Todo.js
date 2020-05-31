import React, { useState } from 'react';

const Todo = ({ todo, deleteTodo, updateTodo, completeTodo }) => {
  const [editTodo, setEditTodo] = useState(todo.task);
  const [toggleEditForm, setToggleEditForm] = useState(false);

  const handleChange = (e) => {
    setEditTodo(e.target.value);
  };

  const handleRemove = () => {
    deleteTodo(todo.id);
  };

  const handleToggle = () => {
    setToggleEditForm(!toggleEditForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo({ ...todo, task: editTodo });
    handleToggle();
  };

  const handleCheckbox = (e) => {
    completeTodo(todo.id);
  };

  return (
    <div className="todo">
      <input type="checkbox" onClick={handleCheckbox} />
      {toggleEditForm ? (
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" value={editTodo} />
        </form>
      ) : (
        <span className={`${todo.completed ? 'completed' : ''}`}>
          {todo.task}
        </span>
      )}
      <span>
        <i className="fa fa-edit" onClick={handleToggle}></i>
      </span>
      <span>
        <i className="fa fa-trash" onClick={handleRemove}></i>
      </span>
    </div>
  );
};

export default Todo;
