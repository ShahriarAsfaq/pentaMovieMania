import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api_key } from "../assets/EnvironmentalDetails";

export const useFetch = (queryID, key) => {
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const [genre,setGnere] =useState ([])
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=cd890f94a756b1518a2a17617a5b430e"
    //console.log("keyid="+queryID)
    
    if(key == "genre"){
    useEffect(() => {
        async function fetchDetails(){
          const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=cd890f94a756b1518a2a17617a5b430e");
          const json = await response.json();
          setGnere(json.genres);
        }
        fetchDetails();
      }, [url])
      return { genre }
    }

    if(key == "movie"){
    useEffect(() => {
      const murl = 'https://api.themoviedb.org/3/discover/movie?page=1&with_genres='+queryID+'&api_key=cd890f94a756b1518a2a17617a5b430e'
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