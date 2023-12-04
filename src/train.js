import React from 'react'
import Pick from './components/pick'
import Trainnav from './trainnav'
import AddTodo from './redux/containers/AddTodo';
import VisibleTodoList from './redux/containers/VisibleTodoList';
import Footer from './redux/components1/Footer';

function train() {
    return (
        <div>
        <br/>
        <br/>
        <br/>
        <Pick/>
        <br/>
        <br/>
        <Trainnav/>
        <br/>
        <br/>
        <AddTodo/>
        <VisibleTodoList />
        <Footer />
        </div>
    )
}

export default train
