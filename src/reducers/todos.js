const defaultState = []

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'TODOS':
      return action.todos;
    case 'APP_TODO':
      return [...state, action.todo]
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) return { ...todo, complete: !todo.complete }
        return todo
      })
    default:
      return state;
  }
}

export default todos;