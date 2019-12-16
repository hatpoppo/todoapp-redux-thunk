import React from "react";
import { FileTypes } from "../TodoApp.types";

interface TodoHeaderProps {
  addTodo: (label: string) => void;
  setFilter: (filter: FileTypes) => void;
  filter: FileTypes;
}

interface TodoHeaderState {
  labelInput: string;
}

export class TodoHeader extends React.Component<TodoHeaderProps, TodoHeaderState> {
  constructor(props: TodoHeaderProps) {
    super(props);
    this.state = { labelInput: "" };
  }

  render() {
    const { filter, setFilter } = this.props;
    return (
      <header>
        <h1>todos</h1>
        <div className="addTodo">
          <input value={this.state.labelInput} className="textfiled" placeholder="add todo"></input>
          <button>Add</button>
        </div>
        <nav className="filter">
          <button onClick={this._onFilter} className={filter === "all" ? "selected" : ""}>
            all
          </button>
          <button className={filter === "active" ? "selected" : ""}>active</button>
          <button className={filter === "completed" ? "selected" : ""}>completed</button>
        </nav>
      </header>
    );
  }
  _onFilter = evt => {
    this.props.setFilter(evt.target.innerText);
  };
  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };
}
