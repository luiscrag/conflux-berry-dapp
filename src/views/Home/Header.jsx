import React from "react";
import AuthButton from "./AuthButton";
import BFluxIcon from "../../bflux-icon.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="Title">
        <img src={BFluxIcon} alt="bflux" width={40} />
        <h1>BFLUX Farming</h1>
      </div>
      <AuthButton />
    </div>
  );
};

export default Header;
