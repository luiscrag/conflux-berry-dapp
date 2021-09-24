import React from "react";
import "../styles/views/Home.scss";
import { Container } from "../components/Layout";
import InputBox from "../components/InputBox";
import BFluxIcon from "../bflux-icon.png";
import Banner from "../components/Banner";
import PoolCard from "../components/PoolCard";

const Home = () => (
  <div id="Home">
    <Container>
      <InputBox>
        <div className="InfoContainer">
          <img id="ConfluxIcon" alt="bflux-icon" src={BFluxIcon} />

          <div className="CoinInfo">
            <h3>Berry Conflux</h3>
            <span>BFLUX</span>
          </div>
        </div>

        <div className="BalanceContainer">
          <h3>Balance</h3>
          <span>100</span>
        </div>
      </InputBox>

      <Banner>
        <Container>
          <h3 className="Title">Berry Pools</h3>
          <p className="Description">
            Best rewards on the Best Blockchain!
            <strong>Stake and win!</strong>
          </p>
        </Container>
      </Banner>

      <div>
        <Container>
          <PoolCard coin="CFX" percent={100} />
          <PoolCard coin="CFX" percent={100} />
          <PoolCard coin="CFX" percent={100} />
        </Container>
      </div>
    </Container>
  </div>
);

export default Home;
