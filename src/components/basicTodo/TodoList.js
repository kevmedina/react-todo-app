import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  deleteTodo,
  updateTodo,
  completeTodo,
  completeAll,
}) => {
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-light col-12">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">
              <input
                type="checkbox"
                onClick={(e) => completeAll(e)}
                style={{ marginRight: '5px' }}
              />
              Completed
            </th>
            <th scope="col">Title</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                completeTodo={completeTodo}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
