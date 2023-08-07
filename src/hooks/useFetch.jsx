import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api_key,apiPath } from "../assets/EnvironmentalDetails";

export const useFetch = (queryID, key) => {
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const [genre,setGnere] =useState ([])
    //const apk = process.env.REACT_APP_API_KEY
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=cd890f94a756b1518a2a17617a5b430e"
    //console.log("keyid="+queryID)
    
    if(key == "genre"){
    useEffect(() => {
        async function fetchDetails(){
          const response = await fetch(apiPath+"genre/movie/list?api_key="+api_key);
          const json = await response.json();
          setGnere(json.genres);
        }
        fetchDetails();
      }, [url])
      return { genre }
    }

    if(key == "movie"){
    useEffect(() => {
      const murl = apiPath+'discover/movie?page=1&with_genres='+queryID+'&api_key='+api_key
        async function fetchDetails(){
          const response = await fetch(murl);
          const json = await response.json();
          setMovie(json.results);
          
        }
        fetchDetails();
      }, [queryID])

  return { movie }
    }

    
}