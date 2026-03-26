// for named export we have to use the same name while importing but for default export we can use any name while importing.
// also we have to use curly braces while importing named export but we don't have to use curly braces while importing default export.
import {ToggleSwitch} from "./projects/ToggleSwitch/ToggleSwitch.jsx";
export const App = () => {
  return (
    <section className="container">
      <ToggleSwitch />
    </section>
  );
};