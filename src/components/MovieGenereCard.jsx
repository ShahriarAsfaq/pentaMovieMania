 import { useFetch } from "../hooks/useFetch";
// import { useTitle } from "../hooks/useTitle";
// import { Card } from "../components";
import { MovieCardBig } from "../components/MovieCardBig"
import { useState,useEffect } from "react";


export const MovieGenereCard = ({keyID, movieGenere}) => {
  //console.log(keyID);
  const { movie: movies } = useFetch(keyID,"movie");
  //useTitle(title);
  
 
  return (
      <div className="flex flex-col justify-start items-start mx-auto px-3 py-7">              
          <span className="self-start text-2xl p-3 font-bold whitespace-nowrap rounded-lg bg-slate-700 hover:bg-purple-600  dark:text-white">{movieGenere}</span> 
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