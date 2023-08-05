import { useFetch } from "../hooks/useFetch";
import { MovieCardBig } from "../components/MovieCardBig"
import { useState } from "react";


export const RelatedMovieCard = ({keyID}) => {
  console.log(keyID);
  const { movie: movies } = useFetch(keyID,"movie");
  
 
  return (
      <div className="flex flex-col justify-start items-start mx-auto px-3">              
        <span className="self-start text-2xl font-semibold whitespace-nowrap dark:text-white">Related Movies</span> 
          { movies ? (
          <div className="flex justify-start flex-wrap other:justify-evenly">
              { movies.map((bigCardMovieList) => (
                  <MovieCardBig key={bigCardMovieList.id} movie={bigCardMovieList} />
               )) }        
          </div>
           ) : "" } 
      </div>
  )
}