import React, { Component } from 'react';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge rounded-pill bg-danger">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              {todo.description}
            </div>
            <div className="card-body">
              {todo.responsible}
            </div>
            <div className="position-absolute bottom-0 start-50 translate-middle-x card-footer">
              <button
                className="btn btn-warning"
                onClick={this.removeTodo.bind(this, i)}>
                Tarea terminada
              </button>
            </div>
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <h4>
            {"Tareas pendiente: " + todos.length}
          </h4>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <h2>ERICK TASK</h2>
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;