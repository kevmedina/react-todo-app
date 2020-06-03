import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const MainTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) => {
      if (updatedTodo.id === todo.id) {
        return { ...todo, task: updatedTodo.task };
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(newTodos);
  };

  const completeTodo = (id) => {
    console.log("Output for: completeTodo -> id", id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="main-todo">
      <h1>Basic Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default MainTodo;
