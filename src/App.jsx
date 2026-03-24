import  NetflixSeries  from "./components/NetflixSeries.jsx";
// for named export we have to use the same name while importing but for default export we can use any name while importing.
// also we have to use curly braces while importing named export but we don't have to use curly braces while importing default export.
import { EventHandling } from "./components/EventHandling.jsx";
import { EventProps } from "./components/EventProps.jsx";
// import "./components/EV.css";
import { EventPropagation } from "./components/EventPropagation.jsx";
import { State } from "./components/hooks/State.jsx";
import {DerivedState} from "./components/DerivedState.jsx";
export const App = () => {
  return (
    <section className="container">
       {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
      {/*  <NetflixSeries />; */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      {/* <State /> */}
      <DerivedState/>
    </section>
  );
};