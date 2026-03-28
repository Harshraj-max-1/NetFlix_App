import {useState} from 'react';
import './ToggleSwitch.css';
import {IoIosSwitch} from 'react-icons/io';
export const ToggleSwitch = () => {
const [isOn, setIsOn] = useState(false);
const handleToggleSwitch = () => {   
   setIsOn(!isOn);
} 
  return (
    <>
    <h1 style={{textAlign:"center" ,color:"black" , fontSize:"50px" }}>
      Toggle Switch
      <IoIosSwitch style={{textAlign:"center" ,color:"red" , fontSize:"50px" }} />
      </h1>
    <div className="toggle-switch" onClick={handleToggleSwitch}>
        <div className={`switch ${isOn ? "on" : "off"}`}>
            <span className="switch-state" >
                {isOn ? "ON" : "OFF"}
            </span>
        </div>
    </div>
    </>
  );
};


// if (isOn) {
//   className = "switch on";
// } else {
//   className = "switch off";
// }