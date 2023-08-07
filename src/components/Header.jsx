import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    }, [darkMode]);
    const activeClass = "text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
    const inActiveClass = "text-base block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-purple dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-purple md:dark:hover:bg-transparent dark:border-gray-700";
  
    return (
      <header className="fixed w-full">      
        <nav className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-9">
            <Link to="/" className="flex items-center">
                <span className="self-center text-3xl tex font-bold whitespace-nowrap dark:text-white">
                    <NavLink to="/pentaMovieMania" className={({isActive}) => isActive ? activeClass : inActiveClass } end>Penta Movie Mania</NavLink>
                </span>
            </Link>
              <div className="justify-between items-center w-full md:flex md:w-auto md:order-1">
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <NavLink to="/pentaMovieMania/watchlist" className={({isActive}) => isActive ? activeClass : inActiveClass }>watchList</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pentaMovieMania/login" className={({isActive}) => isActive ? activeClass : inActiveClass }>Login</NavLink>
                  </li>
                </ul>
              </div>
          </div>
        </nav>
      </header>
    )
  }