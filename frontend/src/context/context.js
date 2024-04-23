import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [coinSelected, setCoinSelected] = useState(null);
  const [tickerData, setTickerData] = useState([]);
  const [error, setError] = useState([false]);

  const updateTickerData = (newData) => {
    setTickerData(newData);
  };
  const updateError = (error) => {
    setError(error);
  };

  const sharedState = {
    coinSelected, setCoinSelected,
    tickerData, updateTickerData,
    error, updateError,
  };

  return (
    <MyContext.Provider value={sharedState}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
