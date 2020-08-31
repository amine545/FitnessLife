import React from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{ 
      color:'blue', 
      border:'1px solid transparent',
      backgroundColor:'white',
      width:'400px',
      height:'20px',
      textDecoration: completed ? 'line-through' : 'none',
      marginLeft:'430px'
    }}
  >
    {text}
  </li>
);

export default Todo;