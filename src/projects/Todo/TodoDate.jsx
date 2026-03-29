import { useState ,useEffect } from "react";
export const TodoDate = () => {
     const [dateTime, setDateTime] = useState("");
          // todo Date and Time
    useEffect(() => {
    const interval = setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
    }, []);  //to update the dateTime state variable every second with the current date and time formatted as "MM/DD/YYYY - HH:MM:SS" using the toLocaleDateString() and toLocaleTimeString() methods of the Date object.
                // to much re-rendering
                //useEffect hook is used to give us a cleanup function that will clear the interval when the component unmounts, preventing memory leaks and unnecessary updates.

    return (
   <h2 className="date-time">{dateTime} </h2>
    );
}