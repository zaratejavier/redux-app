import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
function TodoList({ todos, nextId, filter }) {
  function filterTodos() {
    switch (filter) {
      case "all":
        return todos;
      case "complete":
        return todos.filter((t) => t.complete);
      case "incomplete":
        return todos.filter((t) => !t.complete);
    }
  }
  function renderTodos() {
    const filteredTodos = filterTodos();
    return filteredTodos.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });
  }
  // function renderTodos() {
  //   let filteredTodos = [];
  //   switch (filter) {
  //     case "complete":
  //       filteredTodos = todos.filter((t) => t.complete);
  //       break;
  //     case "incomplete":
  //       filteredTodos = todos.filter((t) => !t.complete);
  //       break;
  //     default:
  //       filteredTodos = todos;
  //   }
  //   return filteredTodos.map((todo) => {
  //     return <Todo key={todo.id} {...todo} />;
  //   });
  // }
  return (
    <div>
      <h1>TodoList </h1>
      <p>currrent id: {nextId}</p>
      {renderTodos()}
    </div>
  );
}
const mapStateToProps = (state) => {
  return { todos: state.todos, nextId: state.nextId, filter: state.filter };
};
export default connect(mapStateToProps)(TodoList);