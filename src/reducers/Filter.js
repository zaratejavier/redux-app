
const filter = (state = 'all', action) => {
  switch (action) {
    case "SET_FILTER":
      return action.filter
    default:
      return state;
  }
}

export default filter;