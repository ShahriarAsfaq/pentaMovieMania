import { Link } from "react-router-dom";
import backup from "../assets/backup.jpg";
import { imagePalaceHolder } from "../assets/EnvironmentalDetails";
import { useDispatch } from "react-redux";
import { add,remove } from "../stores/watchlistSlice";

export const WatchlistCard = ({ movie }) => {
  const dispatch = useDispatch();
  //console.log(movie.title)

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : backup;

  return (
    <div className="flex flex-wrap self-start w-80 bg-white rounded-lg border md:text-sm border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movies/${movie.id}`}>
        <img src={image} className="pb-2 w-full h-full" placeholder="Image" />
      </Link>
      <div className="px-2 w-full">
        <Link to={`/movies/${movie.id}`}>
          <h5 className="py-2 text-2xl w-full font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
        </Link>
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-gray-900 dark:text-white">
              {movie.vote_average}
            </p>
          </div>
          <div>
            <button onClick={() => dispatch(remove(movie))} className="px-2">
              <svg
                className="w-5 h-5 text-red-800 dark:text-red-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 20">
                <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
