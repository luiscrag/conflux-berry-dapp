import React, { useState, createContext } from "react";

export const Context = createContext({
  cfxAddress: null,
  isLogged: null,
  updateCfxAddress: () => null,
});

const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [address, setAddress] = useState(null);

  const formatAddress = (address) => {
    const firstTen = address.substring(0,10);
    const lastFour = address.substring(address.length - 4);
    const add = "..."
    return firstTen + add + lastFour;
  };

  const updateStatus = (address) => {
    setAddress(formatAddress(address));
    setIsLogged(true);
  };

  return (
    <Context.Provider
      value={{ cfxAddress: address, isLogged, updateCfxAddress: updateStatus }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserProvider;
