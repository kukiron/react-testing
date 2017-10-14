import React from "react";

class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    return <div className="todo">{todo}</div>;
  }
}

export default Todo;
