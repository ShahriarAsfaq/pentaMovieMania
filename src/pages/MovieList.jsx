 import { useFetch } from "../hooks/useFetch";
 import { useTitle } from "../hooks/useTitle";
 import { useState,useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MovieGenereCard } from "../components/MovieGenereCard"
import { MovieListCard } from "../components/MovieListCard";
import { apiPath,api_key,imagePalaceHolder } from "../assets/EnvironmentalDetails";



export const MovieList = () => {
  const { genre : genreObj } = useFetch("","genre");
  
  // useEffect(() => {
  //   setGnere(genreObj.genres);
  // }, [])
  // const a = () =>{
  //   console.log("genere = "+genreObj);
  // }
  // a();

  //const { data: movies } = useFetch(apiPath);
  useTitle("Penta_Movies");
  const activeClass = "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const inActiveClass = "text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  
  const handleSubmit = () =>{

  }
  const getOldMovie =() => {
    console.log(isActive);
  }
  const getRecentmovie = ()=>{
      console.log("REcent ones");
  }
  const bigCardMovieList = [{id:"1", original_title:"asjdhashd", overview:"sdkahdksjhdjscbnkujaidbaskjdbausdbsakd", poster_path:""},
                            {id:"2", original_title:"asjdhashd", overview:"sdkahdksjhdjscbnkujaidbaskjdbausdbsakd", poster_path:""},
                            {id:"3", original_title:"asjdhashd", overview:"sdkahdksjhdjscbnkujaidbaskjdbausdbsakd", poster_path:""},
                            {id:"4", original_title:"asjdhashd", overview:"sdkahdksjhdjscbnkujaidbaskjdbausdbsakd", poster_path:""},
                            {id:"5", original_title:"asjdhashd", overview:"sdkahdksjhdjscbnkujaidbaskjdbausdbsakd", poster_path:""}]

  const movieGenere = [
    {
    "id": 28,
    "name": "Action"
    },
    {
    "id": 12,
    "name": "Adventure"
    },
    {
    "id": 16,
    "name": "Animation"
    },
    {
    "id": 35,
    "name": "Comedy"
    },
    {
    "id": 80,
    "name": "Crime"
    },
    {
    "id": 99,
    "name": "Documentary"
    },
    {
    "id": 18,
    "name": "Drama"
    },
    {
    "id": 10751,
    "name": "Family"
    },
    {
    "id": 14,
    "name": "Fantasy"
    },
    {
    "id": 36,
    "name": "History"
    },
    {
    "id": 27,
    "name": "Horror"
    },
    {
    "id": 10402,
    "name": "Music"
    },
    {
    "id": 9648,
    "name": "Mystery"
    },
    {
    "id": 10749,
    "name": "Romance"
    },
    {
    "id": 878,
    "name": "Science Fiction"
    },
    {
    "id": 10770,
    "name": "TV Movie"
    },
    {
    "id": 53,
    "name": "Thriller"
    },
    {
    "id": 10752,
    "name": "War"
    },
    {
    "id": 37,
    "name": "Western"
    }
    ]
    
  return (
    <main>
      <section className="max-w-full mx-auto py-7">
      
      
      <div className="mt-5">
      { genreObj.map((movieGenere) => (                
          <MovieGenereCard key={movieGenere.id} keyID={movieGenere.id} bigCardMovieList={bigCardMovieList} movieGenere={movieGenere.name} />
      )) } 
      </div>
    
      
               
      {/* month input */}
      <div className="flex flex-col justify-start mt-12 max-h-72 other:justify-evenly bg-gray-600 border-b-1 border-gray-600">       
          <div className="flex flex-wrap justify-between items-center px-7">
            
              <span className="self-center items-start text-2xl font-semibold whitespace-nowrap text-white">
                  Latest Movies
              </span>
            
              <div className="items-center w-full md:flex-wrap md:space-x-8 md:w-auto md:order-1">
                <ul className="flex flex-col p-4 mt-4 items-center text-white bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-600 md:dark:bg-gray-600 dark:border-gray-600">
                  <li>
                    Filter Between
                  </li>
                  <li>
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="start_day" name="startDay" className="block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dd" autoComplete="off" />
                    </form>
                  </li>
                  <li>
                    <form onSubmit={handleSubmit}>
                      <input type="text" id="start_month" name="startMonth" className="block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mm" autoComplete="off" />
                    </form>
                  </li>
                  <li>
                    And
                  </li>
                  <li>
                    <form onSubmit={handleSubmit}>
                      <input type="text" id="end_day" name="endDay" className="block p-2  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dd" autoComplete="off" />
                    </form>
                  </li>
                  <li>
                    <form onSubmit={handleSubmit}>
                      <input type="text" id="end_month" name="endMonth" className="block p-2  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mm" autoComplete="off" />
                    </form>
                  </li>
                </ul>
              </div>
          </div>

          {/* month Selection */}
          <div className="justify-start items-start w-full md:flex md:w-auto md:order-1">
                <ul className="flex flex-row p-4 px-7 mt-4 justify-center items-center text-white bg-gray-50 rounded-lg border border-gray-100 md:bg-white dark:bg-gray-600 md:dark:bg-gray-600 dark:border-gray-600">
                  <li onClick={getRecentmovie} className="hover:text-blue-700 hover:cursor-pointer pr-7">
                  This Month
                  </li>
                  <li onClick={getOldMovie} className="hover:text-blue-700 hover:cursor-pointer"> 
                  Last Month
                  </li>
                </ul>
          </div>
      </div>
      {/* movielist */}
      
      <div className="flex flex-col justify-start items-start px-7 py-3 border-2 scroll-my-2 md:space-x-8 md:text-sm md:font-medium md:border-1 bg-gray-600 dark:bg-gray-600 border-white-900">
                { bigCardMovieList.map((bigCardMovieList) => (
                  <MovieListCard key={bigCardMovieList.id} movie={bigCardMovieList} />
                ) ) } 
      </div>
      
      </section>
    </main>
  )
}