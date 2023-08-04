export const Footer = () => {
    return (
        <footer className="p-4 bg-white shadow md:flex md:items-end md:justify-end md:p-6 dark:bg-gray-800">
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://www.imdb.com/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">IMDB</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@imdb" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Youtube</a>
                </li>
            </ul>
        </footer>
    )
  }