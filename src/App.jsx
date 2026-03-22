import  NetflixSeries  from "./components/NetflixSeries.jsx";
// for named export we have to use the same name while importing but for default export we can use any name while importing.
// also we have to use curly braces while importing named export but we don't have to use curly braces while importing default export.
export const App=()=>{  
  return (
    <>
    <NetflixSeries />
    </>
  );
}