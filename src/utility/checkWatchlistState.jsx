import { useState,useEffect } from "react";


export const checkWatchListState = (watchList,movie) =>{
const [isInWatchList, setIsInWatchList] = useState(false);

  useEffect(() => {
    const movieInCart = watchList.find(item => item.id === movie.id);

    if(movieInCart){
      setIsInWatchList(true);
    } else {
      setIsInWatchList(false);
    }

  }, [watchList, movie.id]);
   
  return isInWatchList;

}