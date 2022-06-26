import React from 'react'
import { useSelector } from 'react-redux';
function TodoList(){

    const todos = useSelector((state)=>state.todos);
    console.log(todos);
    return (
        <>
        <h1>Todo List

        </h1>
        <div>
            {todos.map((item)=>(
                <h3 key = {item.id}>{item.input}</h3>
            ))}
        </div>
        </>
    )
}
export { TodoList }