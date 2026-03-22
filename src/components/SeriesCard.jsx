export const SeriesCard =(props)=>{
    const { id, img_url, name, rating, description, cast, genre, watch_url } = props.currElement;
    // props.data is desturctured
    return(
     <li>
    <div>
    <img src={img_url} alt={props.currElement.img_url} width="40%" height="40%" />
    </div>
    <h2>Name : {name}</h2>
    <h3>Netflix Original Series</h3>
    <h3>Rating: {rating}</h3>
    <p>Summary: {description}</p>
    <p>Genre: {genre}</p>
    <p>Cast : {cast}</p>
    {/* <button>{age>=18 ? "Watch Now"ß : "Not Available"}</button> */}
    <a href={watch_url} target="_blank">
        <button>Watch Now</button>
    </a>
    </li>
    )
}