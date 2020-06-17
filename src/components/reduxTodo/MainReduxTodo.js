import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../authRedux/actions/todoActions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const MainReduxTodo = ({ fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  return (
    <div className="main-todo">
      <h1>React-Redux Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
});
export default connect(null, mapDispatchToProps)(MainReduxTodo);
