import React from 'react'
import { useState } from 'react';

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
            <form className='form' onSubmit={handleSubmit}>
                <p>Add your Todos</p>
                <div><input type='text'
                value={newAction} 
                onChange={(e) => setNewAction(e.target.value)} />
                </div>
                <div><button type='submit'>Submit</button></div>
            </form>
        </div>

    );
}

export default AddTodo