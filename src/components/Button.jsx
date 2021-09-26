import React from "react";
import "../styles/components/Button.scss";

const Button = ({ children, ...props }) => {
  const { action, disabled } = props;
  return (
    <button
      onClick={action}
      id="ActionButton"
      className={disabled && "Disabled"}
    >
      {children}
    </button>
  );
};

export default Button;
