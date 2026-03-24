export const EventProps = () => {

  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Thanks for hovering me`);
  };

  return (
    <>
    {/* in the child we passed the event handler as a props  */}
      <WelcomeUser
        onClick={() => HandleWelcomeUser("Harsh")}
        onMouseEnter={handleHover}
      />
    </>
  );
};


const WelcomeUser = (props) => {

  const handleGreeting = () => {
    console.log(`Hey User, Welcome`);
    props.onClick();
  };

  return (
    <>
    {/* we can give any name to the props(onclick is not an event handler here it is just a prop name)  */}
      <button onClick={props.onClick}>Click</button>

      <button onMouseEnter={props.onMouseEnter}>
        Hover me
      </button>

      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
