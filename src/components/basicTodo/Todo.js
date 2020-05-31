import React from "react";

const Todo = ({ todo, deleteTodo }) => {
  // console.log("Todo: ", todo);
  const handleRemove = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo">
      {todo.task}
      <span>
        <i className="fa fa-trash" onClick={handleRemove}></i>
      </span>
    </div>
  );
};

export default Todo;
