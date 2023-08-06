import React, { useState, useEffect } from "react";
import arrowup from "../assets/arrowup.png"

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const image = arrowup

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full p-4 bg-white shadow md:flex md:items-end md:justify-end md:p-6 dark:bg-gray-800">
      <ul className="flex flex-wrap items-center mt-1 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://www.imdb.com/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">
            IMDB
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@imdb" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">
            Youtube
          </a>
        </li>
      </ul>
      {showBackToTop && (
        <div className="ml-4 cursor-pointer" onClick={handleBackToTop}>
          <img src={image} className="h-9" placeholder="Image"/>
        </div>
      )}
    </footer>
  );
};
