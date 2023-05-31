import React from 'react'
import { Button } from 'react-bootstrap'


const Todo = ({actionDelete, actionUpdate, todo}) =>{

const handleClick = () =>{
    actionDelete(todo)
}

const markDone = () => {
    actionUpdate(todo)
}

    return(
        <div className='Todo'> <div className={todo.isCompleted ? 'completed' : ''}>
            {todo.action}
            <Button className="actionBtn" variant="outline-success" type="button" onClick={markDone}>Task Completed</Button>
            <Button class="deleteBtn" variant="outline-danger" type="button" onClick={handleClick}>Delete</Button>
            </div>
        </div>
    )
}

export default Todo