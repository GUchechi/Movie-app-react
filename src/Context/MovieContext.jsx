import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
   return (
      <MovieContext.Provider value={{  }}>
          {children}
      </MovieContext.Provider>
   );
};