import React from 'react';

const TodoList = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default TodoList;

//import React, { Component } from 'react';


// class App extends Component {
 
//   render() {
//     return (
//       <div className="TodoList">
        
//       </div>
//     );
//   }
// }

// const TodoList = props => (
//     <ul>
//         {
//             props.items.map((item, index) =>  <li key={index}>{item}</li>)
//         }
//     </ul>

// );

// export default TodoList;


