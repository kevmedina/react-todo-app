export const addTodo = (todo) => (dispatch) => {
  dispatch({ type: 'ADD_TODO', todo });
};

// export const deleteTodo = (id) => {
//   setTodos(todos.filter((todo) => todo.id !== id));
// };

// export const updateTodo = (updatedTodo) => {
//   const newTodos = todos.map((todo) => {
//     if (updatedTodo.id === todo.id) {
//       return { ...todo, task: updatedTodo.task };
//     }
//     return todo;
//   });
//   setTodos(newTodos);
//   console.log(newTodos);
// };

// export const completeTodo = (id) => {
//   setTodos(
//     todos.map((todo) => {
//       if (todo.id === id) {
//         return { ...todo, completed: !todo.completed };
//       }
//       return todo;
//     })
//   );
// };
// export const completeAll = (e) => {
//   const isCompleted = todos.every((todo) => todo.completed);
//   const updateTodo = todos.map((todo) => ({
//     ...todo,
//     completed: !isCompleted,
//   }));
//   setTodos(updateTodo);
// };
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
