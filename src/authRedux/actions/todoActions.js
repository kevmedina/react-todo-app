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

export const getLocalStorage = () => (dispatch) => {
  dispatch({ type: "LOCAL_STORAGE", todos: "todos" });
};

// export const fetchPosts = async () => {
//   const URL = 'https://jsonplaceholder.typicode.com/todos';
//   const response = await fetch(URL, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await response.json();
//   // console.log('Output for: fetchPosts -> response', data);
//   setTodos(data);
// };
