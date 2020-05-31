import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, updateTodo, completeTodo }) => {
  return (
    <div className="todo-list">
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
    </div>
  );
};

export default TodoList;
