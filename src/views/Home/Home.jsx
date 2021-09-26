import React from "react";
import "../../styles/views/Home.scss";
import { Container } from "../../components/Layout";
import Header from "./Header";
import PoolsBanner from "./PoolsBanner";
import Pools from "./Pools";
import { default as PoolData } from "../../data/Pools";

const Home = () => {
  return (
    <div id="Home">
      <Container>
        <Header />
        <PoolsBanner
          title="Berry Pools"
          description={
            <>
              Best rewards on the Best Blockchain!
              <strong>Stake and win!</strong>
            </>
          }
        />
        <Pools data={PoolData} />
      </Container>
    </div>
  );
};

export default Home;
