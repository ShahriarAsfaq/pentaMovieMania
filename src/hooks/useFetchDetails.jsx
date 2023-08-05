import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api_key } from "../assets/EnvironmentalDetails";

export const useFetchDetails = (apiPath) => {
    const params = useParams();
    const [data, setData] = useState({});
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=`+api_key

    useEffect(() => {
        async function fetchDetails(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
        }
        fetchDetails();
      }, [params.id])

  return {data}
}