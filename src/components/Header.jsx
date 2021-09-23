import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/components/Header.scss";
import Button from "./Button";
import { Container } from "./Layout";

import { getAccounts } from "../utils/ConfluxPortal";

const Header = ({ title }) => {
  const [userAddress, setUserAddress] = useState("Connect with Conflux Portal");

  const getConfluxAccount = async () => {
    const accounts = await getAccounts();
    setUserAddress(accounts[0]);
  };

  return (
    <div id="Header">
      <Container>
        <h1>{title}</h1>
        <Button action={getConfluxAccount}>{userAddress}</Button>
      </Container>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
