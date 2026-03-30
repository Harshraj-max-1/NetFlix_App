import { useState } from "react";
import "./Todo.css";

export const TodoForm =({onAddTodo})=>{
    //used to just store only input value temporaraly
    const [inputValue, setInputValue] = useState({});

    //while writing the task in the input field 
    const handleInputChange = (value) => {  //to update the value of inputValue state variable with the new value from the input field whenever the user types something.
    setInputValue({id:value ,content:value ,checked:false}); //to update the inputValue state variable with an object that contains both the id and content properties, where the id is set to the value of the input field and the content is also set to the same value. This allows us to keep track of both the unique identifier and the actual content of the task in a single state variable.
    };

    //when the user click on the add task button
    const handleFormSubmit = (event) => {
    event.preventDefault(); //to prevent the default behavior of form submission which is to refresh the page
    onAddTodo(inputValue);
    setInputValue({id:" " ,content:" " ,checked:false});
    };

    return(
        <section className="form">
     <form onSubmit={handleFormSubmit}>
    
              <div>
                <input
                  type="text"
                  className="todo-input"
                  autoComplete="off"        //disable browser suggestions
                  value = {inputValue.content}      //show the current value of inputValue in the input field
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