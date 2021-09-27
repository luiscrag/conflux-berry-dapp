import React, { useContext } from "react";
import PoolCard from "../../components/PoolCard";
import { Container } from "../../components/Layout";
import { Context as balanceContext } from "../../contexts/BalanceContext";

const Pools = ({ data }) => {
  const { balance } = useContext(balanceContext);
  return (
    <div>
      <Container>
        {data.map((pool, index) => (
          <PoolCard
            key={pool.stakedCoin}
            stakedCoin={pool.stakedCoin}
            earnedCoin={pool.earnedCoin}
            icon={pool.icon}
            stakedAmount={index === 0 ? balance.cfxStaked : balance.bfluxStaked}
            balance={index === 0 ? balance.cfx : balance.bflux}
          />
        ))}
      </Container>
    </div>
  );
}

export default Pools;
