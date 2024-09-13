import React, { createContext, useState } from 'react';

// Create a Context
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    
    const [swipeStartTime, setSwipeStartTime] = useState(null);

  const [isSwipeStarted, setIsSwipeStarted] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <GlobalContext.Provider value={{ isSwipeStarted, setIsSwipeStarted, user, setUser, swipeStartTime, setSwipeStartTime}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;