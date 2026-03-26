// const age = 19;
// const watchOrNot=(age)=>{
//   if(age>=18){
//     return "Watch Now";
//   }else{
//     return "Not Available";
//   }
// }
import seriesData from "../api/seriesData.json";
import {SeriesCard} from "./SeriesCard.jsx";
const NetflixSeries=()=>{
  return(
    <ul>
        {seriesData.map((currElement)=>(
            <SeriesCard currElement={currElement} />
            //currElement is props that we are passing to the seriesCard component and we are using the currElement prop to pass the current element of the seriesData array to the seriesCard component.
        ))} 
    </ul>
  );
}

export default NetflixSeries;

// export const Header=()=>{
//   return (
//     <>
//     <h2>Netflix</h2>
//     </>
//   );
// } 

// export const Footer=()=>{
//   return (
//     <>
//     <h3>Copyright @HarshRaj2024</h3>
//     </>
//   );
// } 

//there can me multiple named export in a file but there can be only one default export in a file. also we can use both named export and default export in a single file.