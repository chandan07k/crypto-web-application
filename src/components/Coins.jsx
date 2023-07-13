import React from "react";
import classes from "./Coins.module.css";
import CoinItem from "./CoinItem";
import { NavLink } from "react-router-dom";

const Coins = ({ coins }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className={classes["hide-mobile"]}>Volume</p>
        <p className={classes["hide-mobile"]}>Mkt Cap</p>
      </div>
      {coins.map((coin) => (
        <NavLink to={`/${coin.id}`} key={coin.id}>
          <CoinItem coins={coin} />
        </NavLink>
      ))}
    </div>
  );
};

export default Coins;
