import React from "react";
import "../styles/components/Button.scss";

const Button = ({ initialIcon, children, ...props }) => {
  const { action, disabled } = props;
  return (
    <button
      onClick={action}
      id="ActionButton"
      className={`${disabled ? "Disabled" : "None"} ${initialIcon ? "Flex" : "none"}`}
    >
      {initialIcon && initialIcon}
      {children}
    </button>
  );
};

export default Button;
