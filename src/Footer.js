import React from "react";
import { connect } from "react-redux";
import { setFilter } from "./actions";
function Footer({ setFilter, setFilter1, dispatch }) {
  return (
    <div>
      <h1>footer</h1>
      <div onClick={() => setFilter("all")}>all</div>
      <div onClick={() => setFilter("complete")}>completed</div>
      <div onClick={() => setFilter1("incomplete")}>not completed</div>
    </div>
  );
}
const mapDispatchToProp = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
  setFilter1: (filter) => dispatch({ type: "SET_FILTER", filter }),
});
const mapStateToProps = (state) => {
  return { todos: state.todos, nextId: state.nextId };
};
export default connect(mapStateToProps, mapDispatchToProp)(Footer);