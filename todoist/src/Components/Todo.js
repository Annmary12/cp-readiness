import React, { Component } from 'react';
//import AddTodoList from './AddTodoList';
//import TodoList from './TodoList';

class Todo extends Component {
 
  render() {
      let todos;
      if(this.props.todos){
          todos = this.props.todos.map(todo => {
              return <tr key={todo.title}>
              <td>{todo.title}</td>
              <td>{todo.completed}</td>
            </tr>
          })
      }
    return (
      <div className="Todo">
        
        <div className="container">
            <h2>List Of To-do Lists</h2>
            <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Completed?</th>
                      </tr>
                    </thead>
                <tbody>
                {todos}
                </tbody>
                </table>
            
        </div>
      </div>
    );
  }
}

export default Todo;