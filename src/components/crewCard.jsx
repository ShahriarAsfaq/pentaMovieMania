
import { imagePalaceHolder } from "../assets/EnvironmentalDetails";

export const CrewCard = ({crew}) => {
    const image = crew.profile_path ? `https://image.tmdb.org/t/p/w500${crew.profile_path}` : imagePalaceHolder ;
  
    if(crew.department=="Writing" || crew.department=="Directing"){
    return (
      <div className="flex flex-wrap m-1 w-32 justify-start bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img src={image} className="px-2 w-full h-1/2" placeholder="Image"/>
          <div className="p-1">
            <p className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">{crew.original_name}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">{crew.job}</p>
          </div>
      </div>
    )
    }
    
  }