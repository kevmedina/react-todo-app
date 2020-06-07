import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  deleteTodo,
  updateTodo,
  completeTodo,
} from '../../authRedux/actions/todoActions';

const Todo = ({ todo, deleteTodo, updateTodo, completeTodo }) => {
  const [editTodo, setEditTodo] = useState(todo.title);
  const [toggleEditForm, setToggleEditForm] = useState(false);

  const handleChange = (e) => {
    setEditTodo(e.target.value);
  };

  const handleRemove = () => {
    deleteTodo(todo.id);
  };

  const handleToggle = () => {
    setToggleEditForm(!toggleEditForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo({ ...todo, title: editTodo });
    handleToggle();
  };

  const handleCheckbox = () => {
    completeTodo(todo.id);
  };

  return (
    <tr>
      <th scope="row">{todo.dueDate}</th>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckbox}
        />
      </td>
      <td>
        {' '}
        {toggleEditForm ? (
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={editTodo} />
          </form>
        ) : (
          <span className={`${todo.completed ? 'completed' : ''} title`}>
            {todo.title}
          </span>
        )}
      </td>
      <td>
        <i className="fa fa-edit" onClick={handleToggle}></i>
      </td>
      <td>
        <i className="fa fa-trash" onClick={handleRemove}></i>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
    updateTodo: (todoId) => dispatch(updateTodo(todoId)),
    completeTodo: (todoId) => dispatch(completeTodo(todoId)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
