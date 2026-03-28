import { useState ,useEffect } from "react";
import "./Todo.css";
import {MdCheck , MdDeleteForever} from "react-icons/md";
// import { TodoForm } from "./TodoForm";
// import { TodoList } from "./TodoList";
// import { TodoDate } from "./TodoDate";
// import {
//   getLocalStorageTodoData,
//   setLocalStorageTodoData,
// } from "./TodoLocalStorage";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");


    const handleInputChange = (value) => {  //to update the value of inputValue state variable with the new value from the input field whenever the user types something.
    setInputValue(value);
    };

    const handleFormSubmit = (event) => {
    event.preventDefault(); //to prevent the default behavior of form submission which is to refresh the page
    
    //to check if the input field is empty or not
    if (!inputValue) return;

    if (task.includes(inputValue)){
        setInputValue(" ");
        return;
    }  // to check if the data is already existing or not
    
    setTask((prevTask) => [...prevTask, inputValue]);   //to add the new task to the existing task array by using the spread operator to create a new array with the previous tasks and the new task and return the new array.
    // setInputValue(""); //to clear the input field after adding a task

     //to clear the input field after adding a task
    }

    // todo Date and Time
    useEffect(() => {
    const interval = setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
    }, []);  //to update the dateTime state variable every second with the current date and time formatted as "MM/DD/YYYY - HH:MM:SS" using the toLocaleDateString() and toLocaleTimeString() methods of the Date object.
                // to much re-rendering
                //useEffect hook is used to give us a cleanup function that will clear the interval when the component unmounts, preventing memory leaks and unnecessary updates.

  return (
    <section className="todo-container">

      <header>
        <h1>Todo List</h1>
      </header>
    <h2 className="date-time">{dateTime}  
    </h2>
      <section className="form">
        <form onSubmit={handleFormSubmit}>

          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"        //disable browser suggestions
              value = {inputValue}      //show the current value of inputValue in the input field
              onChange={(event) => handleInputChange(event.target.value)} //changes the value of inputValue by updating setInputValue function with the new value from the input field whenever the user types something.
            />
          </div>

          <div>
            <button
              type="submit"
              className="todo-btn"
            >
              Add Task
            </button>
          </div>

        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
        {task.map((curTask, index) => {
        return (
        <li key={index} className="todo-item">
          <span>{curTask}</span>
          <button>
            <MdCheck className="check-btn" />
          </button>
          <button>
            <MdDeleteForever className="delete-btn"/>
          </button>
        </li>
        );
        })}
        </ul>
        </section>

    </section>
  );
};
























// export const Todo = () => {
//   const [task, setTask] = useState(() => getLocalStorageTodoData());

//   const handleFormSubmit = (inputValue) => {
//     const { id, content, checked } = inputValue;

//     //to check if the input field is empty or not
//     if (!content) return;

//     // to check if the data is already existing or not
//     // if (task.includes(inputValue)) return;
//     const ifTodoContentMatched = task.find(
//       (curTask) => curTask.content === content
//     );
//     if (ifTodoContentMatched) return;

//     setTask((prevTask) => [...prevTask, { id, content, checked }]);
//   };

//   //todo add data to localStorage
//   setLocalStorageTodoData(task);

//   //todo handleDeleteTodo function
//   const handleDeleteTodo = (value) => {
//     const updatedTask = task.filter((curTask) => curTask.content !== value);
//     setTask(updatedTask);
//   };

//   //todo handleClearTodoData functionality
//   const handleClearTodoData = () => {
//     setTask([]);
//   };

//   //todo handleCheckedTodo functionality
//   const handleCheckedTodo = (content) => {
//     const updatedTask = task.map((curTask) => {
//       if (curTask.content === content) {
//         return { ...curTask, checked: !curTask.checked };
//       } else {
//         return curTask;
//       }
//     });
//     setTask(updatedTask);
//   };

//   return (
//     <section className="todo-container">
//       <header>
//         <h1>Todo List</h1>
//         <TodoDate />
//       </header>

//       <TodoForm onAddTodo={handleFormSubmit} />

//       <section className="myUnOrdList">
//         <ul>
//           {task.map((curTask) => {
//             return (
//               <TodoList
//                 key={curTask.id}
//                 data={curTask.content}
//                 checked={curTask.checked}
//                 onHandleDeleteTodo={handleDeleteTodo}
//                 onHandleCheckedTodo={handleCheckedTodo}
//               />
//             );
//           })}
//         </ul>
//       </section>

//       <section>
//         <button className="clear-btn" onClick={handleClearTodoData}>
//           Clear all
//         </button>
//       </section>
//     </section>
//   );
// };








// // to check if the data is already existing or not
    // // if (task.includes(inputValue)) return;
    // const ifTodoContentMatched = task.find(
    //   (curTask) => curTask.content === inputValue
    // );
    // if (ifTodoContentMatched) return;
    
    // const newTask = {
    //     id: new Date().getTime(), //to generate a unique id for each task
    //     content: inputValue,
    //     checked: false,
    // };