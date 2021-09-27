import React, { createContext, useState } from "react";

export const Context = createContext({
  balance: undefined,
  updateBalance: () => null,
});

const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState({
    cfx: 0,
    bflux: 0,
    bfluxStaked: 0,
    cfxStaked: 0
  });

  const updateBalance = (balance) => {
    setBalance(balance);
    console.log(balance);
  }

  return (
    <Context.Provider value={{ balance, updateBalance }}>
      {children}
    </Context.Provider>
  );
};

export default BalanceProvider;
