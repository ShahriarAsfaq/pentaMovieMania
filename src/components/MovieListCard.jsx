import { Link } from "react-router-dom";
// import Backup from "../assets/images/backup.png"
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../stores/watchlistSlice";
import { useState, useEffect } from "react";
import { imagePalaceHolder } from "../assets/EnvironmentalDetails";

export const MovieListCard = ({ movie }) => {
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.watchListState.watchList);
  const [isInWatchList, setIsInWatchList] = useState(false);

  useEffect(() => {
    const movieInCart = watchList.find((item) => item.id === movie.id);

    if (movieInCart) {
      setIsInWatchList(true);
    } else {
      setIsInWatchList(false);
    }
  }, [watchList, movie.id]);
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : imagePalaceHolder;

  return (
    <div className="flex flex-wrap items-center w-full justify-between bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-3">
      <Link to={`/pentaMovieMania/movies/${movie.id}`} className="flex-shrink-0">
        <img
          src={image}
          alt={movie.title}
          className="w-12 h-16 object-cover rounded-md"
        />
      </Link>
      <div className="flex flex-col flex-grow px-2">
        <Link
          to={`/pentaMovieMania/movies/${movie.id}`}
          className="text-sm font-bold text-gray-900 dark:text-white hover:underline"
        >
          Title: {movie.title}
        </Link>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          Rating: {movie.vote_average}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {movie.release_date}
        </p>
      </div>
      {isInWatchList ?
      (<button onClick={() => dispatch(remove(movie))} className="px-2">
      <svg
        className="w-5 h-5 text-red-800 dark:text-red-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 14 20">
        <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
      </svg>
    </button>) :
      (<button onClick={() => dispatch(add(movie))} className="px-2">
        <svg
          className="w-5 h-5 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 14 20">
          <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
        </svg>
      </button>)
    }
    </div>
  );
};
