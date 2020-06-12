export const addTodo = (todo) => (dispatch) => {
  dispatch({ type: "ADD_TODO", todo });
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({ type: "DELETE_TODO", id });
};

export const updateTodo = (updatedTodo) => (dispatch) => {
  dispatch({ type: "UPDATE_TODO", updatedTodo });
};

export const completeTodo = (id) => (dispatch) => {
  dispatch({ type: "COMPLETE_TODO", id });
};
export const completeAll = () => (dispatch) => {
  dispatch({ type: "COMPLETE_ALL" });
};

const URL = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = () => (dispatch) => {
  fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((todos) => {
      dispatch({ type: "FETCH_TODOS", todos: todos.reverse() });
    })
    .catch((err) => console.log(err));
};
