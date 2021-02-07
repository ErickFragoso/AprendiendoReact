import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'Sin prioridad'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card rounded-3">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group mt-3">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Titulo"
              />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Responsable"
              />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Descripción"
              />
          </div>
          <div className="form-group mt-3">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>Prioridad Baja</option>
              <option>Prioridad Media</option>
              <option>Prioridad Alta</option>
            </select>
          </div>
          <button type="submit" className="btn btn-warning mt-3">
            Agregar tarea 
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;