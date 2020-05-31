import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const MainTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="main-todo">
      <h1>Basic Todo App</h1>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </div>
  );
};

export default MainTodo;
