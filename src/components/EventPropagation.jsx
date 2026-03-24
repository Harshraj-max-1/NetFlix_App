export const EventPropagation = () => {

  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation(); // it will stop the event from bubbling up to the parent and grandparent divs. so when we click on the child div then only the child div will be clicked and the parent and grandparent divs will not be clicked.
    console.log("Child clicked");
  };

  return (
    // bublling phase: when we click on the child div then first the child div will be clicked then the parent div will be clicked and then the grandparent div will be clicked. this is called bubbling phase because the event is bubbling up from the child to the parent and then to the grandparent.
    <section className="main-div">
      <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};

//onClickCapture => it will trigger the event in the capturing phase. so when we click on the child div then first the grandparent div will be clicked then the parent div will be clicked and then the child div will be clicked. this is called capturing phase because the event is capturing down from the grandparent to the parent and then to the child.