import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiPath, api_key } from "../assets/EnvironmentalDetails";

export const useFetchByDate = (release_date) => {
    const params = useParams();
    const [movielist, setMovieList] = useState([]);
    const [genre,setGnere] =useState ([])
    //const apiKey = process.env.REACT_APP_API_KEY;
    
    
        useEffect(() => {
          const murl = apiPath+'discover/movie?page=1&page=2&'+release_date+'&api_key='+api_key
            async function fetchDetails(){
              const response = await fetch(murl);
              const json = await response.json();
              setMovieList(json.results);
              
            }
            fetchDetails();
          }, [release_date])
    
      return { movielist }
        

}