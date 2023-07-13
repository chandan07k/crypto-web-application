import React from "react";
import { FaCoins } from "react-icons/fa";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <NavLink to="/">
      <div className={classes.navbar}>
        <FaCoins className={classes.icon} />
        <h1>
          Coin
          <span className={classes.purple}>Search</span>
        </h1>
      </div>
    </NavLink>
  );
};

export default NavBar;
