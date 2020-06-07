import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const MainTodo = () => {
  const [todos, setTodos] = useState([]);

  const fetchPosts = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/todos';
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Output for: fetchPosts -> response', data);
    setTodos(data);
  };

  //
  useEffect(() => {
    fetchPosts();
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) => {
      if (updatedTodo.id === todo.id) {
        return { ...todo, title: updatedTodo.title };
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(newTodos);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const completeAll = (e) => {
    const isCompleted = todos.every((todo) => todo.completed);
    const updateTodo = todos.map((todo) => ({
      ...todo,
      completed: !isCompleted,
    }));
    setTodos(updateTodo);
  };

  return (
    <div className="main-todo">
      <h1>Basic Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeAll={completeAll}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default MainTodo;
