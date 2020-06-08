import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../authRedux/actions/todoActions";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    completed: false,
  });

  const handleChange = ({ target: { value } }) => {
    setTodo({
      ...todo,
      title: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, title: "", id: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          onChange={handleChange}
          value={todo.title}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (reduxStore) => {
  return {
    // todos: reduxStore.todoReducer.todos,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
