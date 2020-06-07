import React from 'react';
import { connect } from 'react-redux';
import { completeAll } from '../../authRedux/actions/todoActions';
import Todo from './Todo';

const TodoList = ({ todos, completeAll }) => {
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-light col-12">
          <tr>
            <th scope="col">ID</th>
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
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                // completeTodo={completeTodo}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  completeAll: () => dispatch(completeAll()),
});
export default connect(null, mapDispatchToProps)(TodoList);
