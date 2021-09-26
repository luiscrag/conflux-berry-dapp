import React, { useState, useContext } from "react";
import "../styles/components/PoolCard.scss";
import { RightArrow, DownArrow } from "./icons";
import Button from "./Button";
import { Context } from "../contexts/ModalContext";
import CardStaking from "../components/CardStaking";

const PoolCard = ({ stakedCoin, earnedCoin, icon, stakedAmount }) => {
  const [showDetails, setShowDetails] = useState(false);

  const { onPresent } = useContext(Context);

  return (
    <div id="PoolCard">
      <div id="PoolMain">
        <div
          style={{ marginRight: 16 }}
          onClick={() => setShowDetails((prevValue) => !prevValue)}
        >
          {showDetails ? (
            <DownArrow
              style={{ cursor: "pointer" }}
              fill="white"
              width={10}
              height={10}
            />
          ) : (
            <RightArrow
              style={{ cursor: "pointer" }}
              fill="white"
              width={10}
              height={10}
            />
          )}
        </div>

        <img src={icon} alt="bflux-icon" height={35} />

        <div className="CoinsLabel">
          <span>Earn {earnedCoin}</span>
          <h3>Stake {stakedCoin}</h3>
        </div>
      </div>

      <div className={showDetails && "Show"} id="PoolDetails">
        <div
          className="PoolDetailsContent"
          style={{ display: showDetails ? "flex" : "none" }}
        >
          <div className="StakedSection">
            <input
              className="stakedAmount"
              type="number"
              disabled
              value={stakedAmount}
            />
            <span>{stakedCoin} Staked Amount</span>
          </div>

          <div className="ActionSection">
            <Button
              action={() =>
                onPresent(
                  <CardStaking
                    action="Stake"
                    currency={stakedCoin}
                    balance={stakedAmount}
                  />
                )
              }
            >
              Stake {stakedCoin}
            </Button>
            <Button
              disabled={stakedAmount <= 0}
              action={() =>
                onPresent(
                  <CardStaking action="Unstake" currency={stakedCoin} balance={stakedAmount} />
                )
              }
            >
              Unstake {stakedCoin}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolCard;
