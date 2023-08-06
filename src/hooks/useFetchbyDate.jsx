import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api_key } from "../assets/EnvironmentalDetails";

export const useFetchByDate = (release_date) => {
    const params = useParams();
    const [movielist, setMovieList] = useState([]);
    const [genre,setGnere] =useState ([])
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=cd890f94a756b1518a2a17617a5b430e"
    //console.log("keyid="+queryID)
    
    
        useEffect(() => {
          const murl = 'https://api.themoviedb.org/3/discover/movie?page=1&'+release_date+'&api_key=cd890f94a756b1518a2a17617a5b430e'
            async function fetchDetails(){
              const response = await fetch(murl);
              const json = await response.json();
              setMovieList(json.results);
              
            }
            fetchDetails();
          }, [release_date])
    
      return { movielist }
        

}