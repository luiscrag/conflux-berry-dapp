import React, { useState } from "react";
import "../styles/components/PoolCard.scss";

import { RightArrow, DownArrow } from "./icons";

import BFluxIcon from "../bflux-icon.png";

const PoolCard = ({ coin, percent }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div id="PoolCard">

      <div id="PoolMain">

        <div style={{ marginRight: 16 }} onClick={() => setShowDetails((prevValue) => !prevValue)}>
          {showDetails ? (
            <DownArrow style={{ cursor: 'pointer' }} fill="white" width={10} height={10} />
          ) : (
            <RightArrow style={{ cursor: 'pointer' }} fill="white" width={10} height={10} />
          )}
        </div>
        
        <img src={BFluxIcon} alt="bflux-icon" width={35} height={35} />
        
        <div className="CoinsLabel">
          <span>Earn BFLUX</span>
          <h3>Stake {coin}</h3>
        </div>
      </div>
      
      <div className={showDetails && "Show"} id="PoolDetails" >

      </div>

    </div>
  );
};

export default PoolCard;
