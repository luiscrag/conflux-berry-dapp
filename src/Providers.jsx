import React from "react";
import {ModalProvider} from "./contexts";

const Providers = ({ children }) => (
  <ModalProvider>
    {children}
  </ModalProvider>
);

export default Providers;