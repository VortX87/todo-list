import React from 'react'
import { useState } from 'react'

const Todo = ({actionDelete, actionUpdate, todo}) =>{

const handleClick = () =>{
    actionDelete(todo)
    console.log('Button Testing')
}

const markDone = () => {
    actionUpdate(todo)
    console.log('Update Button')
}



    return(
        <div className={todo.isCompleted ? 'completed' : ''}>
            {todo.action}
            {todo.isCompleted}
            <button onClick={handleClick}>Delete</button>
            <button onClick={markDone}>Mark Done</button>
        </div>
    )
}

export default Todo