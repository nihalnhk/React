import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from "react";
function App() {


  // http://www.omdbapi.com/?i=tt3896198&apikey=2e510f01
  let [movieinfo,setMovieinfo] = useState(null)
  let [title,setTitle] = useState("thor");
 

  useEffect(() => {
  
    getmovie();
  },[])


    function readTitle(value){
      setTitle(value);
    }

    function getmovie()
    {
      
        let url = `http://www.omdbapi.com/?t=${title}&apikey=2e510f01`;
        fetch(url)
        .then((Response)=> Response.json())
        .then((movie)=>{
          setMovieinfo(movie);
        })
        .catch((err)=>{
          console.log(err);
        })
      
    }

  return (
    <div className = "App">
      <div className="container">
      <div className="pad">
        <h1>Movie Search</h1>
      <div className="main">
        <input type = "text" className="search" onChange={(event)=>{readTitle(event.target.value)}} placeholder="Enter movie name"></input>
        <button className="btn" onClick={getmovie}>Get Movie</button>
      </div>
      {
        movieinfo?.Error == undefined?(
      
      <div className="movie">
        <div className="poster">
          <img src = {movieinfo?.Poster} className="img-poster"></img>
        </div>
          <div className="details">
            <div className="pad">
              <h1>{movieinfo?.Title}</h1>
              <p><strong>Genre :</strong>{movieinfo?.Genre}</p>
              <p><strong>Director :</strong>{movieinfo?.Director}</p>
              <p><strong>Plot :</strong>{movieinfo?.Plot}</p>
              <p><strong>Actors :</strong>{movieinfo?.Actors}</p>
              <p><strong>Release Date :</strong>{movieinfo?.Released}</p>
              <div className = "ratings">
              <p><strong>Rating :</strong></p>
              {
                
                movieinfo?.Ratings.map((rating,index)=>(
                  <div>
                  <strong>{rating.Source}   :</strong>  {rating.Value}
                  </div>
                  
                  
                ))
              }
              </div>
              

          


            </div>
          </div>
        

      </div>
        ):
        (
          <h1>Movie not found</h1>
        )
}
      </div>
      </div>
    </div>
  );
}

export default App;
