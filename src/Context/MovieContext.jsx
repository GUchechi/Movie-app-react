import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
    const [hiddenMenu, setHiddenMenu] = useState(true)
    const [activeLink, setActiveLink] = useState('Popular')

   return (
      <MovieContext.Provider value={{ 
            hiddenMenu, setHiddenMenu, activeLink, setActiveLink 
    }}>
          {children}
      </MovieContext.Provider>
   );
};