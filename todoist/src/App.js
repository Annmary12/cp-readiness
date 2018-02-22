import React, { Component } from 'react';
import './App.css';
//import TodoList from './Components/TodoList';
import Todo from './Components/Todo';
import AddTodoList from './Components/AddTodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          title: 'Learn Html Syntax',
          completed: 'True'
        },
        {
          title: 'Learn How to build a web Page with Html',
          completed: 'False'
        },
        {
          title: 'Learn How to style with CSS',
          completed: 'True'
        }
      ]
    }
  }

  handleAddTodo = (todo) => {
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({todos:todos});
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Todoist</h1>
        </header><br/><br />

        <AddTodoList addTodo = {this.handleAddTodo.bind(this)} />
        <Todo todos={this.state.todos} />

        {/* <form onSubmit={this.onSubmit}>
          <input class="form-control" value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <TodoList items={this.state.items} />
        <div className="App-intro">
            <p> My  To-Do list </p>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>checklist</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>My first Todo</td>
                <td>Done</td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    );
  }
}

export default App;
