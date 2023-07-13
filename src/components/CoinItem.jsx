import React from "react";
import classes from "./CoinsItem.module.css";

function CoinItem({ coins }) {
  return (
    <div className={classes["coins-row"]}>
      <p>{coins.market_cap_rank}</p>
      <div className={classes["img-symbol"]}>
        <img src={coins.image} alt="logo" />
        <p>{coins.symbol.toUpperCase()}</p>
      </div>
      <p>${coins.current_price.toLocaleString()}</p>
      <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className={classes["hide-mobile"]}>
        {coins.total_volume.toLocaleString()}
      </p>
      <p className={classes["hide-mobile"]}>
        ${coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
}

export default CoinItem;
