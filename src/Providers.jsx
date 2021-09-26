import React from "react";
import { ModalProvider, BalanceProvider, UserProvider } from "./contexts";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }) => (
  <ModalProvider>
    <ToastContainer theme="dark" />
    <UserProvider>
      <BalanceProvider>{children}</BalanceProvider>
    </UserProvider>
  </ModalProvider>
);

export default Providers;
