import React, {useState} from "react"
import { connect } from "react-redux"
import nextId from "./reducers/nextId"

function TodoForm({ nextId, dispatch }) {
  const [todo, setTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const todoObj = { name: todo, complete: false, id: nextId };
    dispatch({ type: "ADD_TODO", todo: todoObj });
    dispatch({ type: "INC_ID"});

    setTodo('');
  }

  return (
    <div>
      <h1>TodoForm {nextId}</h1>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">add</button>
      </form>
    </div>
  )  
}


const mapStateToProps = (state) => {
  return { nextId: state.nextId}
}

export default connect(mapStateToProps)(TodoForm)