import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { completeAll } from '../../authRedux/actions/todoActions';
import Todo from './Todo';

const TodoList = ({ reduxTodos, completeAll }) => {
  const [todos, setTodos] = useState(reduxTodos);
  const [dueTodos, setDueTodos] = useState([]);

  const updateTodos = () => {
    setTodos(reduxTodos);
    setDueTodos(
      todos.filter((todo) => {
        return todo.dueDate === moment(new Date()).format('L');
      })
    );
  };

  useEffect(() => {
    updateTodos();
    // eslint-disable-next-line
  }, [reduxTodos]);

  return (
    <div>
      <h2>
        {dueTodos.length && `Due: ${moment(new Date()).format('L')}`}
        <hr />
        {dueTodos.length
          ? dueTodos.map((todo, index, arr) => {
              return (
                <span key={todo.id}>
                  {`${index + 1}.${todo.title}${
                    arr.length === index + 1 ? '.' : '; '
                  }`}{' '}
                </span>
              );
            })
          : ''}
      </h2>
      <table className="table table-hover">
        <thead className="thead-light col-12">
          <tr>
            <th scope="col">Due date</th>
            <th scope="col">
              <input
                type="checkbox"
                onClick={() => completeAll()}
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
          {todos?.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </tbody>
      </table>
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
  completeAll: () => dispatch(completeAll()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
