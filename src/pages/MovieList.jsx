import { useFetch } from "../hooks/useFetch";
import { useFetchByDate } from "../hooks/useFetchbyDate";
import { useTitle } from "../hooks/useTitle";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate} from "react-router-dom";
import { MovieGenereCard } from "../components/MovieGenereCard";
import { MovieListCard } from "../components/MovieListCard";
import {
  apiPath,
  api_key,
  imagePalaceHolder,
} from "../assets/EnvironmentalDetails";
import { isValidDate } from "../utility/checkDateValidation"
import { useDispatch,useSelector } from "react-redux";
//import { remove } from "../stores/guestSlice";


export const MovieList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const guest = useSelector(state => state.guestState);

  // useEffect(() => {
  //   if(guest!=true){
  //   navigate("/pentamoviemania/login");
  //   }
  // }, []);

  const today = new Date();
  const previousMonth = new Date(today);
  previousMonth.setMonth(today.getMonth() - 1);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const firstDay = "01";
    const lastDay = new Date(year, date.getMonth() + 1, 0)
      .getDate()
      .toString()
      .padStart(2, "0");
    return (
      "primary_release_date.gte=" +
      year +
      "-" +
      month +
      "-" +
      firstDay +
      "&primary_release_date.lte=" +
      year +
      "-" +
      month +
      "-" +
      lastDay
    );
  };

  const {genre: genreObj } = useFetch("", "genre");
  const [showCurrentMonth, setShowCurrentMonth] = useState(true);
  const [customMonth, setCustomMonth] = useState(formatDate(previousMonth));
  const { movielist: movielist } = useFetchByDate(
    showCurrentMonth ? formatDate(today) : customMonth
  );

  useTitle("Penta_Movies");
  const activeClass =
    "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const inActiveClass =
    "text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.startYear.value);
    const startDay = e.target.startDay.value;
    const startMonth = e.target.startMonth.value;
    const startYear = e.target.startYear.value;
    const endDay = e.target.endDay.value;
    const endMonth = e.target.endMonth.value;
    const endYear = e.target.endYear.value;

    if (
      !isValidDate(startDay, startMonth, startYear) ||
      !isValidDate(endDay, endMonth, endYear)
    ) {
      alert("Please enter valid date values (dd, mm, yyyy).");
    } else {
      setShowCurrentMonth(false);
      setCustomMonth(
        "primary_release_date.gte=" +
          startYear +
          "-" +
          startMonth +
          "-" +
          startDay +
          "&primary_release_date.lte=" +
          endYear +
          "-" +
          endMonth +
          "-" +
          endDay
      );
    }
  };


  const getOldMovie = () => {
    setShowCurrentMonth(false);
    setCustomMonth(formatDate(previousMonth));
  };
  const getRecentmovie = () => {
    setShowCurrentMonth(true);
  };

  return (
    <main>
      <section className="max-w-full mx-auto py-7">
      <h2 className="text-4xl font-bold ml-9 dark:text-white">Populer Movies</h2>
        <div className="px-5 m-3">
          {genreObj.map((movieGenere) => (
            <MovieGenereCard
              key={movieGenere.id}
              keyID={movieGenere.id}
              movieGenere={movieGenere.name}
            />
          ))}
        </div>

        {/* month input */}
        <div className="flex flex-col justify-start mt-12 max-h-72 other:justify-evenly bg-gray-600 border-b-1 border-gray-600">
          <div className="flex flex-wrap justify-between items-center px-7">
            <span className="self-center items-start text-2xl font-semibold whitespace-nowrap text-white">
              Latest Movies
            </span>

            <div className="flex justify-between items-center w-full md:flex-wrap md:space-x-8 md:w-auto md:order-1">
              <form onSubmit={handleSubmit}>
                <ul className="flex flex-wrap p-2 mt-4 items-center text-white bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-600 md:dark:bg-gray-600 dark:border-gray-600">
                  <li>
                    <input
                      type="number"
                      id="start_day"
                      name="startDay"
                      className="block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="dd"
                      autoComplete="off"
                    />
                  </li>
                  <li>
                    <input
                      type="number"
                      id="start_month"
                      name="startMonth"
                      className="block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="mm"
                      autoComplete="off"
                    />
                  </li>
                  <li>
                    <input
                      type="number"
                      id="start_year"
                      name="startYear"
                      className="block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="yyyy"
                      autoComplete="off"
                    />
                  </li>
                  <li>TO</li>
                  <li>
                    <input
                      type="number"
                      id="end_day"
                      name="endDay"
                      className="block p-2  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="dd"
                      autoComplete="off"
                    />
                  </li>
                  <li>
                    <input
                      type="number"
                      id="end_month"
                      name="endMonth"
                      className="block p-2  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="mm"
                      autoComplete="off"
                    />
                  </li>
                  <li>
                    <input
                      type="number"
                      id="end_year"
                      name="endYear"
                      className="block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="yyyy"
                      autoComplete="off"
                    />
                  </li>
                  <li>
                    <input
                      type="submit"
                      className="block p-2 text-gray-900 bg-purple-500 rounded-lg border border-gray-300 sm:text-sm md:items-center dark:hover:bg-purple-500 hover:border-blue-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
                      value="Filter"
                    />
                  </li>
                </ul>
              </form>
            </div>
          </div>

          {/* month Selection */}
          <div className="justify-start items-start w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-row p-4 px-7 mt-4 justify-center items-center text-white bg-gray-50 rounded-lg border border-gray-100 md:bg-white dark:bg-gray-600 md:dark:bg-gray-600 dark:border-gray-600">
              <li
                onClick={getRecentmovie}
                className="hover:text-blue-700 hover:cursor-pointer pr-7"
              >
                This Month
              </li>
              <li
                onClick={getOldMovie}
                className="hover:text-blue-700 hover:cursor-pointer"
              >
                Last Month
              </li>
            </ul>
          </div>
        </div>
        {/* movielist */}

        {movielist ? (
          <div className="flex flex-col justify-start h-96 overflow-auto px-3 py-3 border-2 md:space-x-8 md:text-sm md:font-medium md:border-1 bg-gray-600 dark:bg-gray-600 border-white-900">
            {movielist.map((bigCardMovieList) => (
              <div key={bigCardMovieList.id} className="ml-8 mb-2">
                <MovieListCard movie={bigCardMovieList} />
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </section>
    </main>
  );
};
