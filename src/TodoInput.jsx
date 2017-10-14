import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleAddClick() {
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  }

  render() {
    return (
      <div className="todo-input">
        <input
          ref="todoInputField"
          type="text"
          value={this.state.todo}
          onChange={this.handleChange.bind(this)}
        />
        <button ref="todoInputButton" onClick={this.handleAddClick.bind(this)}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default TodoInput;
