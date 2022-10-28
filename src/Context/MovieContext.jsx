import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
    const API_KEY = '7b450dfa38a9bf90abc192d6a44d2f86'
    const [hiddenMenu, setHiddenMenu] = useState(true)
    const [activeLink, setActiveLink] = useState('Popular')
    const [popularMovies, setPopularMovies] = useState([]);

    
   const getPopularMovies = async () => {
   const popularMoviesResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`);
   const popularMoviesData = await popularMoviesResponse.json();
   setPopularMovies(popularMoviesData);
 };

 useEffect(() => {
   getPopularMovies();
 }, []);

   return (
      <MovieContext.Provider value={{ 
            hiddenMenu, setHiddenMenu, activeLink, setActiveLink, popularMovies
    }}>
          {children}
      </MovieContext.Provider>
   );
};