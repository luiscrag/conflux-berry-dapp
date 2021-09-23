import React from "react";
import {ModalProvider} from "./contexts";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }) => (
  <ModalProvider>
    <ToastContainer theme="dark"/>
    {children}
  </ModalProvider>
);

export default Providers;