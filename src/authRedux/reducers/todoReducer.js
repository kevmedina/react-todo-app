const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newLocalStorageTodos = [...state.todos, action.todo];
      localStorage.setItem('todos', JSON.stringify(newLocalStorageTodos));
      return {
        ...state,
        todos: newLocalStorageTodos,
      };
    case 'COMPLETE_ALL':
      const isCompleted = state.todos.every((todo) => todo.completed);
      const updateTodos = state.todos.map((todo) => ({
        ...todo,
        completed: !isCompleted,
      }));
      return {
        ...state,
        todos: updateTodos,
      };
    case 'COMPLETE_TODO':
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
    case 'UPDATE_TODO':
      const newTodos = state.todos.map((todo) => {
        if (action.updatedTodo.id === todo.id) {
          return { ...todo, title: action.updatedTodo.title };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    case 'DELETE_TODO':
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };

    case 'FETCH_TODOS':
      const fetchTodos = action.todos;
      localStorage.setItem('todos', JSON.stringify(fetchTodos));
      return {
        ...state,
        todos: fetchTodos,
      };
    default:
      return state;
  }
};
