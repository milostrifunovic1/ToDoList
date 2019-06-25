import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Footer from './Footer';

class App extends Component {

  state = {
    todos: [
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.round(Math.random() * 1000);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className=" container-fluid col-12 col-md-5 m-auto pt-2" >
        <div className="header pb-4">
          <h1 className="row m-auto pt-3 pb-4 justify-content-center"> To Do List: </h1>
          <AddTodo addTodo={this.addTodo} />
        </div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <div className="p-4"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
