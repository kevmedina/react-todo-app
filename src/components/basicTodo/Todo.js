import React from "react";

const Todo = ({ todo }) => {
  console.log("Todo: ", todo);
  return (
    <div className="todo">
        {todo.task}
        <span>
          <i className="fa fa-trash"></i>
        </span>
    </div>
  );
};

export default Todo;
