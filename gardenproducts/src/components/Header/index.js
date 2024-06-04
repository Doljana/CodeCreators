import React from 'react';
import styles from "./header.module.css";
import basket from "../../assets/images/header/bag.svg";
import logo from "../../assets/images/header/logo.svg";
import heard from "../../assets/images/header/heard.svg";
import { NavLink } from "react-router-dom";
import mode from "../../assets/images/header/mode.svg";

export default function Header({ toggleTheme, isDarkMode }) {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </NavLink>
      <ul className={styles.nav}>
        <NavLink to="/MainPage" className={styles.link}>
          Main Page
        </NavLink>
        <NavLink to="/Categories" className={styles.link}>
          Categories
        </NavLink>
        <NavLink to="/AllProducts" className={styles.link}>
          All products
        </NavLink>
        <NavLink to="/AllSales" className={styles.link}>
          All sales
        </NavLink>
      </ul>
      <div className={styles.logoContainer}>
        <NavLink to="/ShoppingCart">
          <div className={styles.heard_icon}>
            <img className={styles.heard} src={heard} alt="Heart" />
          </div>
        </NavLink>
        <NavLink to="/ShoppingCart">
          <div className={styles.basket_icon}>
            <img className={styles.basket} src={basket} alt="Basket" />
          </div>
        </NavLink>



        
        <button className={styles.greenButton}>
          1 day discount
        </button>
        {/* <button className={styles.toggleButton} onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button> */}

        <button className={styles.mode}>
         
        </button>


      </div>
    </header>
  );
}