import { Routes, Route } from "react-router-dom";
import { MovieList } from "../pages/movielist";
import { MovieDetail } from "../pages/MovieDetail";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { WatchList } from "../pages/WatchList";


export const AallRoutes = () => {
  
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="" element={<MovieList />} />
            <Route path="movies/:id" element={<MovieDetail />} />
            <Route path="watchlist" element={<WatchList />} /> 
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    </div>
  )
}