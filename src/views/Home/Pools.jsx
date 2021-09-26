import React from "react";
import PoolCard from "../../components/PoolCard";
import { Container } from "../../components/Layout";

const Pools = ({ data }) => (
  <div>
    <Container>
      {data.map((pool) => (
        <PoolCard
          stakedCoin={pool.stakedCoin}
          earnedCoin={pool.earnedCoin}
          icon={pool.icon}
          stakedAmount={0}
          balance={0}
        />
      ))}
    </Container>
  </div>
);

export default Pools;
