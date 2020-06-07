import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const MainReduxTodo = ({ reduxTodos }) => {
  console.log("MainReduxTodo -> reduxTodos", reduxTodos);
  const [todos, setTodos] = useState(reduxTodos);

  //
  useEffect(() => {
    setTodos(reduxTodos);
  }, [reduxTodos]);

  return (
    <div className="main-todo">
      <h1>Basic Todo App</h1>
      <AddTodo />
      <TodoList
        todos={todos}
        // completeAll={completeAll}
        // completeTodo={completeTodo}
        // deleteTodo={deleteTodo}
        // updateTodo={updateTodo}
      />
    </div>
  );
};

const mapStateToProps = (reduxStore) => {
  // console.log('reduxStore', reduxStore);
  return {
    reduxTodos: reduxStore.todoReducer.todos,
  };
};
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(MainReduxTodo);
