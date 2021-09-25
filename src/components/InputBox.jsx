import React, { useEffect, useState } from "react";
import "../styles/components/InputBox.scss";
import Button from "./Button";

const InputBox = ({ children }) => {
  const [pendingEarning, setPendingEarning] = useState(0);

  useEffect(
    () => setTimeout(() => setPendingEarning(pendingEarning + 1), 1000),
    [pendingEarning]
  );

  return (
    <div id="InputBox">
      <div id="InputBoxWrapper">
        {children}
      </div>
      <Button disabled={pendingEarning <= 0} >Claim {pendingEarning.toString()} BFLUX</Button>
    </div>
  );
};

export default InputBox;
