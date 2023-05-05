import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import AddTodo from './AddTodo';


const BASE_URL = "http://localhost:5000/"

function TodoList (){

    const [todos, setTodos] = useState([])

    useEffect(() =>{
    }, [todos])

    const getActions = async () => {
        const res = await axios.get(BASE_URL)
        setTodos(res.data)
      }
      const actionCreator = async (action) =>{
         await axios.post(BASE_URL, {action: action})
        // setTodos([...todos, {action:action, isCompleted:false}])
        getActions()
      }

    return(
        <div>
            <AddTodo actionCreator={actionCreator}/>
            {todos.map((todo) =>{
            return <div>
                {todo.action}
                
                </div>
        })}
            </div>
    )
}

export default TodoList