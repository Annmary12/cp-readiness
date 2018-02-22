import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      items: []
    }
  }

  onChange = (event) => {
    this.setState({term:event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Todoist</h1>
        </header><br/><br />

        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
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
        </div>
      </div>
    );
  }
}

export default App;
