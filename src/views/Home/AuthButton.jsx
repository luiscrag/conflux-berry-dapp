import React, { useContext } from "react";

import Button from "../../components/Button";
import { Hashicon } from "@emeraldpay/hashicon-react";
import { LockIcon } from "../../components/icons";

import { getAccount, getBalances } from "../../utils/ConfluxPortal";
import { Context as UserContext } from "../../contexts/UserContext";
import { Context as BalanceContext } from "../../contexts/BalanceContext";

const AuthButton = () => {
  const { cfxAddress, isLogged, updateCfxAddress } = useContext(UserContext);
  const { updateBalance } = useContext(BalanceContext);

  const auth = async () => {
    const account = await getAccount();
    updateCfxAddress(account);

    // Get Balances
    const balances = await getBalances(account);
    updateBalance(balances);
  };

  return (
    <Button
      action={!isLogged ? auth : () => null}
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
