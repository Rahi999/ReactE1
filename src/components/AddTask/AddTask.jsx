import React, { useState } from "react";
import styles from "./addTask.module.css";
import Counter from "..//counter/Counter"
export default AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos, setTodos] = useState([]);
 const [value, setValue] = useState("");

const addTodo=(newTodo)=> {
  setTodos([...todos, newTodo])
}
  return (
   



<div className="Parent">
<div className="head"><h1>TodoList</h1></div>
<div className="child1"> 
<input  data-cy="add-task-input" className="search" placeholder="Add Task..."
addTodo={addTodo}
onChange={(e)=> setValue(e.target.value)}
/> 
<button data-cy="add-task-button" className="button">+</button></div>
<div className="child2" >
<span>
 
</span>
{value}
  <Counter />
</div>
</div>


  




  );
}