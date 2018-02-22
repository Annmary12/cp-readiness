import React, { Component } from 'react';


class AddTodoList extends Component {
 constructor() {
     super();
      this.state = {
          todo: {}
      }
 }

 static defaultProps = {
    isCompleted: ['True', 'False']
 }

 onChange = (event) => {
     this.setState({term:this.state.title});
 }

 handleSubmit = (event) => {
     event.preventDefault();
     if(this.refs.title.value === ""){
         alert('Title is required');
     }
     else{
         this.setState({todo: {
             title: this.refs.title.value,
             completed: this.refs.completed.value
         }}, () => {
             title:this.refs.title.value = "";
             this.props.addTodo(this.state.todo);
             //console.log(this.state.todo);
         })
        
     }
    //  this.setState({

    //  })
 }
  render() {
      let isCompleteOptions = this.props.isCompleted.map(isComplete => {
          return  <option key={isComplete}>{isComplete}</option>
      })
    return (
      <div className="addTodoList">
        <div className="container">
        <div className="row">
        <h3>Add New Todo List</h3>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
              <div className="col-md-5">
                  <label>Title</label>
                  <input className="form-control" ref="title" onChange={this.onChange} />
              </div>
          </div>

          <div className="row">
              <div className="col-md-5">
                  <label>Completed?</label>
                  <select className="form-control" ref="completed">{isCompleteOptions}</select>
              </div>
          </div><br/>

          <div className="row">
            <div className="col-md-5">
                <button className="btn btn-success">Add Todo</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTodoList;