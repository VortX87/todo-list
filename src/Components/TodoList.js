import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import AddTodo from './AddTodo';
import Todo from './Todo';


const BASE_URL = "http://localhost:5000/"

function TodoList (){

    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() =>{
      getActions()
    }, [count])

    const getActions = async () => {
        const res = await axios.get(BASE_URL)
        setTodos(res.data)
      }
    const actionCreator = async (action) =>{
         await axios.post(BASE_URL, {action: action})
        setCount(count+1)
      }

    const actionDelete = async (todo) =>{
        await axios.delete(`${BASE_URL}${todo.id}`)
        setCount(count+1)
      }

    const actionUpdate = async (todo) =>{
        await axios.patch(`${BASE_URL}${todo.id}`)
        setCount(count+1)
      }

    return(
        <div className='TodoWrapper'>
            <AddTodo actionCreator={actionCreator}/>
            {todos.map((todo) =>(
                <Todo actionDelete={actionDelete} todo={todo} actionUpdate={actionUpdate}/>       
        ))}
          </div>
    )
}

export default TodoList