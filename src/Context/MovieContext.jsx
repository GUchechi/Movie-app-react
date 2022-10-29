import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
    const API_KEY = '7b450dfa38a9bf90abc192d6a44d2f86'
    const [isLoading , setIsLoading] = useState(false);
    const [hiddenMenu, setHiddenMenu] = useState(true)
    const [activeLink, setActiveLink] = useState('Popular')
    const [popularMovies, setPopularMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [showPagination, setShowPagination] = useState(true);

    

   //  Popular movies
   const getPopularMovies = async () => {
   const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`);
   const popularMoviesData = await popularMoviesResponse.json();
   setPopularMovies(popularMoviesData);
 };

//  All movies
   const getMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`);
      const data = await response.json();
      if (search.trim() === "") {
         setMovies(data);
       }
   }

   // Search for movies

   const handleSearch = async (e) => {
      e.preventDefault();
      if (search.trim() === "") {
        return;
      }
      const searchResponse = await fetch
          (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage}`)
          const searchData = searchResponse.json();
          setMovies(searchData)
         setShowPagination(false)
   }


   useEffect(() => {
      getPopularMovies();
   }, []);

   useEffect(() => {
    getMovies();
   }, [search, currentPage]);

// isLoading
  useEffect(() => {
   const loadingTimeout = setTimeout(() => {
     setIsLoading(false);
   }, 1300);
   return () => clearTimeout(loadingTimeout);
 }, [movies,currentPage]);


   return (
      <MovieContext.Provider value={{ 
            hiddenMenu, 
            setHiddenMenu, 
            activeLink, 
            setActiveLink, 
            popularMovies, 
            search, 
            setSearch,
            currentPage, 
            setCurrentPage,
            movies, 
            setMovies,
            handleSearch,
            getPopularMovies,
            getMovies,
            isLoading,
            setIsLoading,
            showPagination, 
            setShowPagination
    }}>
          {children}
      </MovieContext.Provider>
   );
};