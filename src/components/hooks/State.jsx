import {useState} from "react";
//importing the usestate hook from react lib.
//each time the state variable gets updated then the component will re-render and the new value of the state variable will be displayed on the screen.
export const State = () => {
const [count, setCount] = useState(0); // count is a state variable , setCount is used to update state varibale & useState(0) is hook used to set the initial value of the state .

const handleButtonClick = () => {
  setCount(() => count + 1); //callback function gets called automatically .
};

return (
  <>
    <section className="main-div">
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Increment</button>
      {/* this event handler is used to update the state variable count by incrementing its value by 1 every time the button is clicked. when we click on the button then the handleButtonClick function will be called and it will update the state variable count by incrementing its value by 1 and then the component will re-render and the new value of count will be displayed on the screen. */}
    </section>
  </>
);
};

//count => state variable which is used to store the current value of the count.
//setCount => function which is used to update the value of the count.
//useState(0) => it is a hook which is used to initialize the state variable with the initial value of 0.