
import { useTitle } from "../hooks/useTitle";
import { WatchlistCard } from "../components/watchlistCard";
import { useDispatch,useSelector } from "react-redux";
import { ipAddress } from "../assets/EnvironmentalDetails";

export const WatchList = () => {
  const watchList = useSelector((state) => state.watchListState.watchList);
  console.log(JSON.stringify({watchList}))
  useTitle("Watchlist");
  const u_id = useSelector(state => state.userIDState.userID);
  const authtoken = useSelector(state => state.loginStatusState.loginStatus);

  const handleSave = async () =>{
    console.log("uid = ",u_id);
    try {
      const response = await fetch(ipAddress+"/api/watchlist/addwatchlist", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authtoken,
        },
        body: JSON.stringify({watchList}),
      });

      if (response.ok) {
        // Registration successful, handle response or redirect
        const data = await response.json()
        // console.log(data.authtoken)
        // dispatch(add(data.authtoken))
        // navigate("/pentamoviemania");
        alert("Data saved successfully");

      } else {
        // Registration failed, handle error
        alert("Save failed");
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  }
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {watchList.map((movie) => (
            <WatchlistCard key={movie.id} movie={movie} />
          ))}
        </div>
      
      <button
        onClick={handleSave}
        className="w-40 item-center ml-3 mb-12 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
      >
        Save Watchlist
      </button>
      </section>
    </main>
  );
};
