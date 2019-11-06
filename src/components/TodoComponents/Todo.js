import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div
        className={`todoItem${this.props.todo.completed ? " complete" : ""}`}
        onClick={() => {
          this.props.toggleItem(this.props.todo.name);
        }}
      >
        <h1>{this.props.todo.name}</h1>
      </div>
    );
  }
}

export default Todo;
