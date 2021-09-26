import React from "react";
import PropTypes from "prop-types";
import "../styles/components/Header.scss";
import Button from "./Button";
import { Container } from "./Layout";

const Header = ({ address }) => {
  return (
    <div id="Header">
      <Container>
        <Button>{address}</Button>
      </Container>
    </div>
  );
};

export default Header;
