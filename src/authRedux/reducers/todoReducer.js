const initialState = {
  todos: [
    {
      id: 1121212121,
      title: 'Todo one',
      dueDate: '06/16/2020',
      completed: false,
    },
    {
      id: 21211212212,
      title: 'Todo two',
      dueDate: '06/11/2020',
      completed: false,
    },
    {
      id: 312121213123,
      title: 'Todo three',
      dueDate: '06/07/2020',
      completed: true,
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newLocalStorageTodos = [action.todo, ...state.todos];
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
        todos: [...state.todos, ...fetchTodos],
      };
    default:
      return state;
  }
};
