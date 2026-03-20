export const App=()=>{  
  return (
    <>
    <NetflexSeries />
    <NetflexSeries />
    <NetflexSeries />
    <NetflexSeries />
    <NetflexSeries />
    </>
  );
}
const age = 19;
const watchOrNot=(age)=>{
  if(age>=18){
    return "Watch Now";
  }else{
    return "Not Available";
  }
}

const NetflexSeries=()=>{
  const name  ="Stranger Things";
  const rating = 8.7;
  const summary = "In the 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.";
  // const age = 16;
  const genre=()=>{
    return "Sci-fi, Horror, Thriller";
  }
  return (
    <>
    <div>
    <img src="ST5.jpg" alt="ST5.jpg" width="40%" height="40%" />
    </div>
    <h2>Name : {name}</h2>
    <h3>Netflix Original Series</h3>
    <h3>Rating: {rating}/10</h3>
    <p>Summary: {summary}</p>
    <p>Genre: {genre()}</p>
    {/* <button>{age>=18 ? "Watch Now" : "Not Available"}</button> */}
    <button>{watchOrNot(age)}</button>
    </>
  );
}

// export default App;