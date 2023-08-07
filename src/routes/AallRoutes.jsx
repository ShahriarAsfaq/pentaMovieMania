import { Routes, Route } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
import { MovieDetail } from "../pages/MovieDetail";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { WatchList } from "../pages/WatchList";


export const AallRoutes = () => {
  
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="pentaMovieMania" element={<MovieList />} />
            <Route path="pentaMovieMania/movies/:id" element={<MovieDetail />} />
            <Route path="pentaMovieMania/watchlist" element={<WatchList />} /> 
            <Route path="pentaMovieMania/login" element={<Login />} />
            <Route path="pentaMovieMania/register" element={<Register />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    </div>
  )
}