export const EventHandling = () => {

  function handleButtonClick(Event) {
    console.log(Event); //syntheticbase event object
    console.log(Event.target); // it will give the target element that is button in this case
    console.log(Event.type); // it will give the type of event that is click in this case
    alert("Hey I am onClick Event");
  }

const handleWelcomeUser = (user) => { //parameter is passed to the function
  console.log(`Hey ${user}, Welcome`); //using template literals to print the message in the console
};

  return (
    <>
    {/* handleButtonClick is a function that is called when the button is clicked and it receives the event object as an argument and it logs the event object to the console and it also shows an alert message when the button is clicked. */}
    <button onClick={handleButtonClick}>
        click Me
    </button>

      <br />

     {/* Passing Arguments to Event Handlers  */}
    <button onClick={() => handleWelcomeUser("HARSH")}>
        click Me
    </button>
    </>
  );
};