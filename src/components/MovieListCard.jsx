// import { Link } from "react-router-dom";
// import Backup from "../assets/images/backup.png"

export const MovieListCard = ({movie}) => {
    const {id, original_title, overview, poster_path} = movie;
    //const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup ;
  
    return (
      <div className="flex flex-wrap m-1 w-full justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col p-3">
              {/* <Link to={`/movie/${id}`}> */}
                  <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">Title: {original_title}</h5>
              {/* </Link> */}
              <p className="font-normal text-gray-700 dark:text-gray-400">id{id}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">genere:</p>
          </div>
            <button className="px-7">
            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/>
            </svg>
            </button>
      </div>
    )
  }