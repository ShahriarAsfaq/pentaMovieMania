// import { useFetch } from "../hooks/useFetch";
// import { useTitle } from "../hooks/useTitle";
// import { Card } from "../components";
import { MovieCardBig } from "../components/MovieCardBig"


export const MovieGenereCard = ({bigCardMovieList, movieGenere}) => {
  //const { data: movies } = useFetch(apiPath);
  //useTitle(title);

  return (
    
      <div className="flex flex-col justify-start items-start mx-auto px-3">              
          <span className="self-start text-2xl font-semibold whitespace-nowrap dark:text-white">{movieGenere+" Movies"}</span> 
          <div className="flex justify-start flex-wrap other:justify-evenly">
              { bigCardMovieList.map((bigCardMovieList) => (
                  <MovieCardBig key={bigCardMovieList.id} movie={bigCardMovieList} />
               )) }        
          </div>
       
      </div>
  )
}