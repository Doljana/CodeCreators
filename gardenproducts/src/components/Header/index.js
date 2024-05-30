import React from "react";
import styles from "./header.module.css";
import basket from "../../assets/images/header/bag.svg";
import logo from "../../assets/images/header/logo.svg";
import { NavLink } from "react-router-dom";


export default function Header() {
 
  return (
    <>
      <header>
        <NavLink to="/">
          <img className={styles.logo} src={logo} />
        </NavLink>
        <ul className={styles.nav}>
          <NavLink to="/ Main Page" className={styles.link}>
            Main Page
          </NavLink>
          <NavLink to="/Categories" className={styles.link}>
            Categories
          </NavLink>
          <NavLink to="/All products" className={styles.link}>
            All products
          </NavLink>
          <NavLink to="/All sales" className={styles.link}>
            All sales
          </NavLink>
        </ul>
        <NavLink to="/Schoping Card ">
          <div className={styles.basket_icon}>
            <img className={styles.basket} src={basket} />
            
          </div>
        </NavLink>
      </header>
    </>
  );
}