
import React, { useState } from 'react'
import Todolist from './Todolist';
import './Todoapp.css'
const Todoapp = () => {
    const [todo,settodo] = useState("");
    const [todos,settodos] = useState([]);

    const getdetails = (event)=>{
        settodo(event.target.value)
    };
    const submitdetails = (event) => {
    event.preventDefault();
    // if (todo.trim() === "") return; // Prevent adding empty todos
    const  Newtodo = [...todos,todo];
    settodos(Newtodo);
    settodo(""); // Clear input field after adding todo
    };
    const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    settodos(updatedTodos);
    };

  return (
    <div>
        <h2>Todo Management</h2>
        <form onSubmit={submitdetails}>
            <input type="text" value={todo} onChange={getdetails} id='value'/><br/>
            <input type="submit" value="ADD" id='button'/>
        </form>
        <Todolist Ttlist = {todos} dteele = {deleteTodo}/>
    </div>
  )
}

export default Todoapp