import React from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{ 
      color:'black', 
      border:'1px solid transparent',
      backgroundColor:'white',
      width:'400px',
      height:'20px',
      textDecoration: completed ? 'line-through' : 'none',
      marginLeft:'280px'
    }}
  >
    {text}
  </li>
);

export default Todo;