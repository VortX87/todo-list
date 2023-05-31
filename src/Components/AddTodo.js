import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';


const AddTodo = ({actionCreator}) => {

    const [newAction, setNewAction] =useState('')
    

    let handleSubmit = async (e) => {
        e.preventDefault();
        actionCreator(newAction)
        setNewAction('')
    }
     

    return (
        <div>
            <h1>Add your Todo's</h1>
        </div>,
        <div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <h1>Todo List Tracker</h1>
                <div><input type='text' className='todo-input'
                value={newAction} 
                placeholder='Add your Todos..'
                onChange={(e) => setNewAction(e.target.value)} />
                </div>
                <div><Button variant="outline-primary" className='todo-btn' type='submit'>Add Task</Button></div>
            </form>
        </div>

    );
}

export default AddTodo