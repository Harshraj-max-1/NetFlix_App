import {useState} from 'react';
import './ToggleSwitch.css';
export const ToggleSwitch = () => {
const [isOn, setIsOn] = useState(false);
const handleToggleSwitch = () => {   
   setIsOn(!isOn);
} 
  return (
    <div className="toggle-switch" onClick={handleToggleSwitch}>
        <div className={`switch ${isOn ? "on" : "off"}`}>
            <span className="switch-state" >
                {isOn ? "ON" : "OFF"}
            </span>
        </div>
    </div>
  );
};


// if (isOn) {
//   className = "switch on";
// } else {
//   className = "switch off";
// }