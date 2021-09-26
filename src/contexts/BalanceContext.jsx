import React, { createContext, useState } from "react";

export const Context = createContext({
  cfxBalance: undefined,
  updateCfxBalance: () => null,
});

const BalanceProvider = ({ children }) => {
  const [cfxBalance, setCfxBalance] = useState(0);

  const updateBalance = (cfx) => {
    setCfxBalance(cfx);
    console.log(cfx);
  }

  return (
    <Context.Provider value={{ cfxBalance, updateCfxBalance: updateBalance }}>
      {children}
    </Context.Provider>
  );
};

export default BalanceProvider;
