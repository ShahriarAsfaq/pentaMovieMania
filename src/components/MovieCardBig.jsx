 import { Link } from "react-router-dom";
 import backup from "../assets/backup.jpg"
import { imagePalaceHolder } from "../assets/EnvironmentalDetails";

export const MovieCardBig = ({movie}) => {
  //console.log(movie.title)
  
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : backup ;

  return (
    <div className="flex flex-wrap self-start w-80 bg-white rounded-lg border md:text-sm border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
         <Link to={`/movies/${movie.id}`}> 
          <img src={image} className="pb-2 w-full h-full" placeholder="Image"/>
         </Link> 
        <div className="px-2">
             <Link to={`/movies/${movie.id}`}> 
                <h5 className="py-2 text-2xl w-full font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
             </Link> 
            <p className="py-1 font-normal w-full text-gray-700 dark:text-gray-400">{movie.vote_average}</p>
        </div>
    </div>
  )
}