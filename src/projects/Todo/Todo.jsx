import { useState ,useEffect } from "react";
import "./Todo.css";

import { TodoForm } from "./TodoForm.jsx";
import { TodoList } from "./TodoList.jsx";
import { TodoDate } from "./TodoDate";
// import {
//   getLocalStorageTodoData,
//   setLocalStorageTodoData,
// } from "./TodoLocalStorage";

export const Todo = () => {
    
    const [task, setTask] = useState([]);
   

    const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;    //to check if the input field is empty or not
    if (task.includes(inputValue)) return; // to check if the data is already existing or not 
    setTask((prevTask) => [...prevTask, inputValue]);   //to add the new task to the existing task array by using the spread operator to create a new array with the previous tasks and the new task and return the new array.
    }

    
    const handleDeleteTodo = (curTask) => {
        const updatedTask = task.filter((task) => task !== curTask); //to create a new array that includes all tasks except the one that matches the curTask value, effectively removing it from the list.// it retruns the elements which holds true to the condition
        setTask(updatedTask); //to update the task state variable with the new array of tasks that does not include the deleted task, causing the component to re-render and reflect the changes in the UI.
    };
    

  return (
    <section className="todo-container">

      <header>
        <h1>Todo List</h1>
         <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />
       
       {/* to render the list of all tasks  */}
      <section className="myUnOrdList"> 
        <ul>
        {task.map((curTask, index) => {
        return (
       <TodoList
       key={index}
       data={curTask}
       handleDeleteTodo={handleDeleteTodo}
       />
        );
        })}
        </ul>
        </section>

        <section>   
            <button className="clear-btn" onClick={() => setTask([])}> 
                Clear All
            </button>
        </section>

    </section>
  );
};
















