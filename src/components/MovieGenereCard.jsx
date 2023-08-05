 import { useFetch } from "../hooks/useFetch";
// import { useTitle } from "../hooks/useTitle";
// import { Card } from "../components";
import { MovieCardBig } from "../components/MovieCardBig"
import { useState,useEffect } from "react";


export const MovieGenereCard = ({keyID, bigCardMovieList, movieGenere}) => {
  //console.log(keyID);
  const { movie: movies } = useFetch(keyID,"movie");
  //useTitle(title);
  
 
  return (
      <div className="flex flex-col justify-start items-start mx-auto px-3">              
          <span className="self-start text-2xl font-semibold whitespace-nowrap dark:text-white">{movieGenere+" Movies"}</span> 
          { movies ? (
          <div className="flex justify-start flex-wrap other:justify-evenly">
              { movies.slice(0, 5).map((bigCardMovieList) => (
                  <MovieCardBig key={bigCardMovieList.id} movie={bigCardMovieList} />
               )) }        
          </div>
           ) : "" } 
      </div>
  )
}