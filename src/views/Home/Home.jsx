import React, { useContext } from "react";
import "../../styles/views/Home.scss";
import { Container } from "../../components/Layout";
import BFluxIcon from "../../bflux-icon.png";
import CfxICon from "../../cfx-icon.png";
import Banner from "../../components/Banner";
import PoolCard from "../../components/PoolCard";
import { Context as BalanceContext } from "../../contexts/BalanceContext";

const Home = () => {
  const { cfxBalance } = useContext(BalanceContext);

  return (
    <div id="Home">
      <Container>
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
            <PoolCard
              stakedCoin="CFX"
              earnedCoin="BFLUX"
              icon={CfxICon}
              stakedAmount={0}
              balance={cfxBalance}
            />
            <PoolCard
              stakedCoin="BFLUX"
              earnedCoin="BFLUX"
              icon={BFluxIcon}
              stakedAmount={0}
              balance={0}
            />
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Home;
