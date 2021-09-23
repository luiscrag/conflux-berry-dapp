import React from "react";
import "../styles/components/Button.scss";

const Button = ({ children, ...props }) => {
  const { action } = props;
  return (
    <button onClick={action} id="ActionButton">
      {children}
    </button>
  );
};

export default Button;
