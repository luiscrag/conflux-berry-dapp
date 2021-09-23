import React, { createContext, useState } from "react";
import Overlay from "../components/Overlay";
import Modal from "../components/Modal";

export const Context = createContext({
  isOpen: false,
  modalNode: null,
  onDismiss: () => null,
  onPresent: () => null,
  setCloseOnOverlayClick: () => true,
});

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState(undefined);
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

  const handlePresent = (node) => {
    setModalNode(node);
    setIsOpen(true);
  };

  const handleDismiss = () => {
    setModalNode(undefined);
    setIsOpen(false);
  };

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      handleDismiss();
    }
  };

  return (
    <Context.Provider
      value={{
        isOpen,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlayClick,
      }}
    >
      {isOpen && (
        <Modal>
          <Overlay show />
          {React.isValidElement(modalNode) &&
            React.cloneElement(modalNode, {
              onDismiss: handleDismiss,
            })}
        </Modal>
      )}
      {children}
    </Context.Provider>
  );
};

export default ModalProvider;
