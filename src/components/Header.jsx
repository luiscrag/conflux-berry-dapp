import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import "../styles/components/Header.scss";
import Button from "./Button";
import { Container } from "./Layout";

import { getAccounts, isConflux, getCfxBalance } from "../utils/ConfluxPortal";
import { Context as BalanceContext } from "../contexts/BalanceContext";

const Header = ({ title }) => {
  const [userAddress, setUserAddress] = useState("Connect with Conflux Portal");
  const { updateCfxBalance } = useContext(BalanceContext);

  const getConfluxAccount = async () => {
    const conflux = isConflux();
    if (conflux) {
      const accounts = await getAccounts();
      const account = accounts[0];
      setUserAddress(account);

      // Update CFX Balance Context
      updateCfxBalance(await getBalance(account));
    }
  };

  const getBalance = async (address) => {
    const cfx = await getCfxBalance([address, "latest_state"]);
    return parseInt(cfx, 16) / 1000000000000000000;
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
