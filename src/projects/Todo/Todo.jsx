import { useState } from "react";
import "./Todo.css";

import { TodoForm } from "./TodoForm.jsx";
import { TodoList } from "./TodoList.jsx";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";



export const Todo = () => {
  const [task, setTask] = useState(()=>getLocalStorageTodoData());// to initialize the task state variable with the data retrieved from localStorage by calling the getLocalStorageTodoData function, which returns an array of tasks. If there is no data in localStorage, it initializes task as an empty array.

    const handleFormSubmit = (inputValue) => {
    const {id , content , checked} = inputValue; //destructuring the inputValue object to get the id, content, and checked properties
    if (!content) return;    //to check if the input field is empty or not

    // if (task.includes(inputValue)) return; // to check if the data is already existing or not 
    const ifTodoContentMatches = task.find((curTask) => curTask.content === content); //to check if the content of the new task already exists in the task array by using the some method to iterate through the array and compare the content property of each task with the content of the new task. It returns true if a match is found and false otherwise.
    if (ifTodoContentMatches) return; //to prevent adding duplicate tasks to the task array by checking if the content of the new task already exists in the array. If a match is found, the function returns early and does not add the new task.

    
    setTask((prevTask) => [...prevTask, {id:id , content:content , checked:checked}]);   //to add the new task to the existing task array by using the spread operator to create a new array with the previous tasks and the new task and return the new array.
    }

    
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((task) => task.content !== value); //to create a new array that includes all tasks except the one that matches the curTask value, effectively removing it from the list.// it retruns the elements which holds true to the condition
        setTask(updatedTask); //to update the task state variable with the new array of tasks that does not include the deleted task, causing the component to re-render and reflect the changes in the UI.
    };
    
    // todo handleCheckedTodo functionality
    const handleCheckedTodo = (value) => {
    const updatedTask = task.map((curTask) => {
    if (curTask.content === value) {
      return { ...curTask, checked: !curTask.checked };
    } else {
      return curTask;
    }
    });

  setTask(updatedTask);
};

// todo add data to localStorage
setLocalStorageTodoData(task);

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
        {task.map((curTask) => { // curTask and index
        return (
       <TodoList
       key={curTask.id}
       data={curTask.content}
       checked = {curTask.checked}
       handleDeleteTodo={handleDeleteTodo}
       handleCheckedTodo={handleCheckedTodo}
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
















