import { useState } from "react";
export const LiftingState = () => {

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
        <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({inputValue , setInputValue}) => {
    // const [inputValue, setInputValue] = useState(""); // we are lifting the state up to the parent component so that we can share the state between the child components.

  return (
    <>
      <input 
        type="text"
        placeholder="enter your name"
        value={inputValue}  // we are using the value prop to set the value of the input field to the state variable inputValue.
        onChange={(e) => setInputValue(e.target.value)} // we are using the onChange event to update the state variable inputValue with the value of the input field.
      ></input>
    </>
  );
};

const DisplayComponent = ({inputValue}) => {
  return <p>The current input value is:{inputValue} </p>;
};