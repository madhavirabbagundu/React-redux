import React from 'react'
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/action";
export const TodoItem =()=>{
    const [input,setInput] = React.useState("");
    const dispatch = useDispatch();

  const handleData=(e)=>{
    setInput(e.target.value)
  }
 
  const handleAdd = () => {
    const payload = {
        input,
        status:false,
        id:uuid()
    };
    dispatch(addTodo(payload));
    setInput("");
  }



    return (
        <>
        <h1>TodoItems</h1>
        <div>
        <input type = "text"
        placeholder='Add Something'
        value = {input}
        onChange={handleData}/>

        <button onClick = {handleAdd}>ADD</button>
        </div>
        </>
    );
};
// export { TodoItem }