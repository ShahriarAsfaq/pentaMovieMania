import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import {
  apiPath,
  api_key,
  imagePalaceHolder,
} from "../assets/EnvironmentalDetails";
import { MovieGenereCard } from "../components/MovieGenereCard";
import { CastCard } from "../components/castCard";
import { CrewCard } from "../components/crewCard";
import { useFetchDetails } from "../hooks/useFetchDetails";
import { RelatedMovieCard } from "../components/relatedMovieCard";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../stores/watchlistSlice";
import { checkWatchListState } from "../utility/checkWatchlistState";

export const MovieDetail = () => {
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.watchListState.watchList);
  const location = useLocation();
  const relatedMovieTitle = ["Related"];
  const params = useParams();
  const movieDetailsUrl = "movie/" + params.id;
  const castUrl = "movie/" + params.id + "/credits";
  const [relatedMovieGenre, setrelatedMovieGenre] = useState([]);
  const [r_id, setR_id] = useState("");
  //const [movie,setMovie] = useState({}) ;
  var rid;
  var relatedMovie;

  const { data: movie } = useFetchDetails(movieDetailsUrl);
  const { data: personal } = useFetchDetails(castUrl);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const pageTitle = useTitle(movie.title);

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : imagePalaceHolder;

  return (
    <main>
      <section className="flex justify-start flex-wrap py-5">
        <div className="max-w-sm px-10">
          <img className="rounded" src={image} alt={movie.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <div className="flex flex-wrap justify-between w-full">
          <h1 className="text-4xl justify-between font-bold my-3">
            {movie.title}
          </h1>
            {checkWatchListState(watchList, movie) ? (
              <button onClick={() => dispatch(remove(movie))} className="pr-5">
                <svg
                  className="w-5 h-5 text-red-800 dark:text-red-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 14 20"
                >
                  <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
                </svg>
              </button>
            ) : (
              <button onClick={() => dispatch(add(movie))} className="pr-5">
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 14 20"
                >
                  <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z" />
                </svg>
              </button>
            )}
          </div>
          <p className="my-4">{movie.overview}</p>
          {movie.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              <p className="hidden">{(rid = movie.genres[0].id)}</p>
              {movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

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
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {movie.vote_count} reviews
            </span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {movie.imdb_id}
            </a>
          </p>
        </div>
      </section>

      {/* Casting Details */}
      <div className="flex flex-col justify-start items-start mx-auto px-3">
        <span className="self-start text-2xl font-semibold whitespace-nowrap dark:text-white">
          Top Casts
        </span>
        {personal.cast ? (
          <div className="flex justify-start flex-wrap other:justify-evenly py-5">
            {personal.cast.map((cast) => (
              <CastCard cast={cast} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Crew Details */}
      <div className="flex flex-col justify-start items-start mx-auto my-10 px-3">
        <span className="self-start text-2xl font-semibold whitespace-nowrap dark:text-white">
          Directors $ Writers
        </span>
        {personal.crew ? (
          <div className="flex justify-start flex-wrap other:justify-evenly py-5">
            {personal.crew.map((crew) => (
              <CrewCard crew={crew} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Related Movies */}
      {movie.genres ? (
        <div className="mt-20">
          <RelatedMovieCard keyID={movie.genres[0].id} />
        </div>
      ) : (
        ""
      )}
    </main>
  );
};
