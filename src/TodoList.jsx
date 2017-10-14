import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todo-list">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <Todo todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
