import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/components/CardStaking.scss";
import Card from "./Card";
import Button from "./Button";
import Input from "./Input";

const CardStaking = ({ action, currency, balance, onDismiss }) => {
  const [valueSelected, setValueSelected] = useState(0);

  const handleChange = (event) => {
    const value = event.target.value;

    if (value >= 0 && value <= balance) setValueSelected(event.target.value);
  };

  const setMax = () => {
    setValueSelected(balance);
  };

  return (
    <Card>
      <h2>{action + ' ' + currency}</h2>
      <hr />
      <div className="HeaderCard">
        <div className="BalanceWrapper">
          <span>
            {currency} Balance: {balance.toString()}
          </span>
          <Input type="number" value={valueSelected} onChange={handleChange} />
        </div>
        <Button action={setMax}>Max</Button>
      </div>
      <div className="ActionSection">
        <Button action={() => onDismiss()}>Cancel</Button>
        <Button disabled={valueSelected <= 0}>{action}</Button>
      </div>
    </Card>
  );
};

CardStaking.propTypes = {
  action: PropTypes.string,
  currency: PropTypes.string,
  balance: PropTypes.number,
};

export default CardStaking;
