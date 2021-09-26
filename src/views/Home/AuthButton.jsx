import React, { useContext } from "react";

import Button from "../../components/Button";
import { Hashicon } from "@emeraldpay/hashicon-react";
import { LockIcon } from "../../components/icons";

import { getAccount } from "../../utils/ConfluxPortal";
import { Context as UserContext } from "../../contexts/UserContext";

const AuthButton = () => {
  const { cfxAddress, isLogged, updateCfxAddress } = useContext(UserContext);

  const auth = async () => {
    const account = await getAccount();
    updateCfxAddress(account);
  };

  return (
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
  );
};

export default AuthButton;
