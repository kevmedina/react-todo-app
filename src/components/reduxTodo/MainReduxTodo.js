import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getLocalStorage } from "../../authRedux/actions/todoActions";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const MainReduxTodo = ({ reduxTodos, getLocalStorage }) => {
  const [todos, setTodos] = useState(reduxTodos);

  //
  useEffect(() => {
    getLocalStorage();
    setTodos(reduxTodos);
  }, [reduxTodos, getLocalStorage]);

  return (
    <div className="main-todo">
      <h1>React-Redux Todo App</h1>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
};

const mapStateToProps = (reduxStore) => {
  // console.log('reduxStore', reduxStore);
  return {
    reduxTodos: reduxStore.todoReducer.todos,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getLocalStorage: () => dispatch(getLocalStorage()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainReduxTodo);
