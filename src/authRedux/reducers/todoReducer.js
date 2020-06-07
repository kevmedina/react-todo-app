const initialState = {
  todos: [
    {
      id: 1212,
      title: "redux-training",
      completed: false,
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case "COMPLETE_ALL":
      const isCompleted = state.todos.every((todo) => todo.completed);
      const updateTodos = state.todos.map((todo) => ({
        ...todo,
        completed: !isCompleted,
      }));
      return {
        ...state,
        todos: updateTodos,
      };
    case "COMPLETE_TODO":
      const completedTodos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        ...state,
        todos: completedTodos,
      };
    case "UPDATE_TODO":
      const newTodos = state.todos.map((todo) => {
        if (action.updatedTodo.id === todo.id) {
          return { ...todo, title: action.updatedTodo.title };
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodos,
      };
    case "DELETE_TODO":
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
};
