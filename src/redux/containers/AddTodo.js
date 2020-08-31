import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import '../add.css'
const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={
          e => {
            e.preventDefault();

            if (!input.value.trim()) {
              return
            }

            dispatch(addTodo(input.value));
            input.value='';
          }
        }
      >
        <input type="text"  placeholder='organize your workout routine' style={{width:'500px' , height:'30px'}} ref={el => (input = el)} />
        <button type='submit'style={{width:'100px' , height:'40px'}}>Add exercice</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);