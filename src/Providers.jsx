import React from "react";
import { ModalProvider, BalanceProvider } from "./contexts";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }) => (
  <ModalProvider>
    <ToastContainer theme="dark" />
    <BalanceProvider>{children}</BalanceProvider>
  </ModalProvider>
);

export default Providers;
