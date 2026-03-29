import { useState } from "react";
import "./Todo.css";

export const TodoForm =({onAddTodo})=>{
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {  //to update the value of inputValue state variable with the new value from the input field whenever the user types something.
    setInputValue(value);
    };

    const handleFormSubmit = (event) => {
    event.preventDefault(); //to prevent the default behavior of form submission which is to refresh the page
    onAddTodo(inputValue);
    setInputValue("");
    };

    return(
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
    );
}