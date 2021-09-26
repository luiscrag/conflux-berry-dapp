import React, { useContext } from "react";
import Button from "../../components/Button";
import { Context as UserContext } from "../../contexts/UserContext";
import BFluxIcon from "../../bflux-icon.png";
import { Hashicon } from "@emeraldpay/hashicon-react";
import { LockIcon } from "../../components/icons";
import { getAccount } from "../../utils/ConfluxPortal";

const Header = () => {

  const { cfxAddress, isLogged, updateCfxAddress } = useContext(UserContext);
  
  const auth = async () => {
    const account = await getAccount();
    updateCfxAddress(account);
  };

  return (
    <div className="Header">
      <div className="Title">
        <img src={BFluxIcon} alt="bflux" width={40} />
        <h1>BFLUX Farming</h1>
      </div>
      <Button
        action={!isLogged && auth}
        initialIcon={
          !isLogged ? (
            <LockIcon fill="white" width={15} />
          ) : (
            <Hashicon value={cfxAddress} size={15} />
          )
        }
      >
        {!isLogged ? "Connect Wallet" : cfxAddress}
      </Button>
    </div>
  );
};

export default Header;
