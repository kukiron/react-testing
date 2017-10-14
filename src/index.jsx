import React from "react";
import ReactDOM from "react-dom";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    const todos = ["Mow lawn", "Walk dog"];

    this.setState({
      todos: todos
    });
  }

  addTodo(newTodo) {
    const newTodos = [...this.state.todos, newTodo];

    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="app">
        <TodoInput addTodo={this.addTodo.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
