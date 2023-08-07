import { useSelector } from "react-redux";
import { useTitle } from "../hooks/useTitle";
import { WatchlistCard } from "../components/watchlistCard";


export const WatchList = () => {
  const watchList = useSelector(state => state.watchListState.watchList);
  useTitle("Watchlist");
 
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">       
          { watchList.map((movie) => (
            <WatchlistCard key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}