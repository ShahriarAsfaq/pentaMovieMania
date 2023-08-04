
import { imagePalaceHolder } from "../assets/EnvironmentalDetails";

export const CastCard = ({cast}) => {
    const image = cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : imagePalaceHolder ;
  
    return (
      <div className="flex flex-wrap m-1 w-32 justify-start bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img src={image} className="px-2 w-full h-1/2" placeholder="Image"/>
          <div className="p-1">
            <p className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">{cast.character}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">{cast.original_name}</p>
          </div>
            
      </div>
    )
  }